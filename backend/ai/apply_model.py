from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.chains import LLMChain


OPENAI_API_KEY = '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'


def apply_model(title, question):
    chat = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0.2, openai_api_key=OPENAI_API_KEY)

    # 답변 형식
    system_template = """
    당신은 {title}의 직장에 입사하고 싶은 24세 심하지 않은 장애인을 위한 자기소개서 작성 도우미입니다.
    {question}이 비어있다면 자소서를 새로 작성해주고, 그렇지 않다면 맞춤법에 유의하며 문장 구분없이 불필요한 문장 없도록 간단명료하게 자기소개서를 작성해주시면 됩니다.
    """
    system_message_prompt = SystemMessagePromptTemplate.from_template(system_template)

    # 질문 형식
    human_template = "{question} 내용을 바탕으로 자기소개서를 작성해주시기 바랍니다."
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    # 템플릿에 맞는 모델 생성
    chain = LLMChain(llm=chat, prompt=chat_prompt)

    # 질문 및 답변
    response = chain.run(title=title, question=question)
    response = response.replace("\n\n", "\n")

    return response


# 현재 사용자는 24세 심하지 않은(경증) 장애인이라고 가정
# 테스트
# print(apply_model("(주)새날테크텍스 - 생산직 채용모집 (정규직)", "여기서 일하고 싶습니다."))
