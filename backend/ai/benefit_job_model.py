from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.chains import LLMChain
import os

OPENAI_API_KEY = ''

if OPENAI_API_KEY != '':
    # FAISS 불러오기(혜택, 일자리 텍스트를 임베딩한 벡터)
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

    if os.getcwd().split('/').pop() == 'project' or os.getcwd().split('\\').pop() == 'project':
        db = FAISS.load_local('../ai/faiss/', embeddings, 'faiss')
    elif os.getcwd().split('/').pop() == 'ai' or os.getcwd().split('\\').pop() == 'ai':
        db = FAISS.load_local('./faiss/', embeddings, 'faiss')
    else:
        print(os.getcwd())

    query = 'target: 24 '  # 만 24세 기준
    retrieved_pages = db.similarity_search_with_relevance_scores(query, k=20)  # 유사도 상위 20개
    retrieved_contents = "\n".join([p[0].page_content for p in retrieved_pages])


def benefit_job_model(question):
    chat = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0, openai_api_key=OPENAI_API_KEY)

    # 답변 형식
    system_template = """
    당신은 질문에 맞게 target: 과 distinction: 과 '이상', '미만', '심한', '심하지 않는'을 잘 구별하여 id: 를 답해야 됩니다.
    질문에서 '중증' 단어는 '심한'으로, '경증' 단어는 '심하지 않은'으로 해석해야 합니다.
    {docs} 내용만으로 대답해야 되고, id: 는 여러개일 수도 있으며, 적절한 id가 있다면 반드시 <distinction: ?, id: [?, ?, ?, ...]> 형식만을 출력해야되고,
    그렇지 않다면 "해당되는 정보가 없습니다."라고 출력해야 됩니다.
    """
    system_message_prompt = SystemMessagePromptTemplate.from_template(system_template)

    # 질문 형식
    human_template = "Answer the following question: {question}"
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    # 템플릿에 맞는 모델 생성
    chain = LLMChain(llm=chat, prompt=chat_prompt)

    # 질문 및 답변
    question = question.replace('혜택', '복지')
    question = question.replace('일', '일자리')
    question = question.replace('중증', '심한')
    question = question.replace('경증', '심하지 않은')
    question = question.replace('내가', '')
    question = question.replace('지금', '')
    query = "만 24세 이상인 심하지 않은 장애인 기준, " + question
    response = chain.run(docs=retrieved_contents, question=query)
    response = response.replace('\n', '')

    # 추가적인 예외 처리
    if response[0] == '<':
        response = response[:response.index('>') + 1]
    if response[response.find('>') - 1] == '.':
        response = "해당되는 정보를 찾을 수 없습니다."

    return response


# 현재 사용자는 24세 심하지 않은(경증) 장애인이라고 가정
# 테스트
# print(benefit_job_model("지원금 좀 알려줘"))
