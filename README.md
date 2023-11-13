<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=2023_nov_hackathon&fontSize=70" />

## 1. 팀명 🏷

#### 2023 대구를 빛내는 해커톤 8조 : "희망이 아빠"<br/><br/><br/>

## 2. 제출 타입 및 주제 💡

#### 세션 : S타입
#### 주제 : "희망이. 대구에 거주하는 장애인을 위한 개인 비서"<br/><br/><br/>

## 3. 프로젝트 한 줄 소개 📌

#### "희망이는 대구 거주 장애인의 혜택 및 일자리 안내 서비스입니다."<br/><br/><br/>

## 4. 프로젝트에 활용된 기술 🔧
 ### ⦁ Frontend
  #### React와 Chat-UI-Kit 라이브러리를 사용한 챗봇 인터페이스를 구축하였습니다.
  서버에서 응답을 받으면, 챗봇의 답변을 메시지 배열에 추가합니다.
  
  <br/>이벤트 핸들러 함수로 handleInputChange 함수와 handleSendClick 함수를 사용하였습니다.
  <br/>handleSendClick함수는 사용자가 메시지를 보내려고 할 때 호출되며 기능은 다음과 같습니다.

  <br/>1) 사용자의 메시지를 메시지 배열에 추가한 뒤, 입력필드를 비웁니다.
  ```javascript
        // 사용자의 메시지 
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: inputValue,
                sentTime: "just now",
                sender: "User",
                direction: "outgoing",
                position: "single",
                type: "text"
            }
        ]);
    
        setInputValue("");  //메시지 보낸 후 입력 필드 비우기
  ```
  <br/>2) 서버로 메시지를 POST 요청으로 전송하며, 이후 서버에서 응답을 받으면 챗봇의 답변을 메시지 배열에 추가합니다.
  ```javascript
        fetch(serverURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // JSON 형식의 데이터를 전송한다고 알리는 헤더
            },
            body: JSON.stringify(data1),
        })
            .then(response => response.json())
            .then(result =>{
                // 챗봇의 답변  

                let resultdata = "hello";

                if (result.answer[0].type == "welfare") {
                    const endNumber = result.answer.length;
                    const startNumber = 0;

                    const newMessages = [];

                    const newMessage = {
                        message: "회원님을 위한 "+ result.answer.length +"개의 지원금이 있네요!", 
                        sentTime: "just now",
                        sender: "희망이",
                        direction: "incoming",
                        position: "single",
                        type: "text"
                    };

                    newMessages.push(newMessage);
  ```
  <br/>3) 구성된 메시지 배열을 MessageList 컴포넌트에서 순회하며 각 메시지에 대한 Message 컴포넌트를 생성하여 보여줍니다.
  ```javascript
         for (let i = startNumber; i < endNumber; i++) {
             var partdata = result.answer[i].info;

             const messageContent = partdata.service + "을 알아 보시는 것은 어떨까요?\n\n" +
             partdata.service  + "은(는) " + partdata.content + "\n\n" + partdata.target + "\n\n" + partdata.how;

             const newMessage = {
                 message: messageContent,
                 sentTime: "just now",
                 sender: "희망이",
                 direction: "incoming",
                 position: "single",
                 type: "text"
             };

             newMessages.push(newMessage);
         }
  ```
  
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/7ee91c78-a4a7-48e0-9560-91f18833fc93" width="375px" height = "760px" />

  
### ⦁ Backend
#### Django Framework를 통한 REST API를 설계하였습니다.
```bash
backend
+---ai
|   |   apply_model.py
|   |   benefit_job_model.py
|   |
|   \---faiss
|           faiss.faiss
|           faiss.pkl
|
\---project
    |   db.sqlite3
    |   manage.py
    |
    +---fatherapp
    |   |   admin.py
    |   |   apps.py
    |   |   hire_json.json
    |   |   models.py
    |   |   serializer.py
    |   |   tests.py
    |   |   urls.py
    |   |   views.py
    |   |   __init__.py
    |   |
    |   \---migrations
    |           0001_initial.py
    |           __init__.py
    |
    \---project
            asgi.py
            settings.py
            urls.py
            wsgi.py
            __init__.py

```
manage.py를 통해 Django Framework의 서버 실행 및 전반적인 관리를 수행하였습니다.<br/>


/benefit, /welfare, /jobs 로부터 GET request를 받거나,
/myinfo, /jobs 로부터 POST request를 받아 backend/fatherapp/view.py에서 REST API를 처리합니다.
/chatbot, /applypage 에서 사용자의 질문에 따라 backend/fatherapp/view.py 와 backend/ai 의 module을 활용해
생성형 AI의 반응을 형성하며 사용자와 상호작용합니다. <br/>


models.py로 파이썬 특유의 ORM(Object Relational Mapping)을 이용하여
데이터베이스를 생성하고 탐색 등을 진행할 수 있습니다.<br/>


또한 사용자가 가진 특성에 따라 다른 출력값이 나타나도록 데이터 상호작용 로직을 확립하였습니다. 
view.py에서 APIView의 메소드를 이용해 사용자가 이용할 페이지와의 전반적인 상호작용 로직을 처리하였습니다. <br/> 


또한 파이썬 기반의 API를 이용해 생성형 AI 활용으로 확장하였습니다.
ai/apply_model.py, benefit_job_model.py 등의 모듈을 이용하여 생성형 AI의 상호작용을 도왔습니다. <br/> 


  
### ⦁ AI 
#### LangChain과 GPT-3.5-turbo LLM 모델을 사용하여 프롬프트 엔지니어링을 하였습니다.
 
혜택 및 일자리 안내 모델과 자소서 작성 도우미 모델을 만들었습니다.


<br/>1) 복지로, 장애인잡 사이트에서 대구 관련 데이터를 크롤링하였습니다.

<img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/6775a76d-b4a0-4b89-92f5-4f6dccfff99d" width="700px" height = "400px" />

  
<br/>2) openAI에서 제공하는 기능을 통해 데이터를 벡터 임베딩하여 DB에 저장하였습니다.
```python
    from langchain.text_splitter import REcursiveCharacterTextSplitter, CharacterTextSplitter
    
    t1 = open('test.txt', '\', encoding= 'utf-8')
    pages = []
    for i in range(1, 82):
        temp = ""
        with open('./pages/' + str[i] + '.txt') as f:
            lines = f.readlines()
            text_splitter = REcursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
            for line in lines:
                if line.split(': ')[0] == '대상':
                    temp = ("id: " + str[i] + "//distinction: 혜택, 복지, 지원금//target: " + line[4:])
                    #print(temp)
                    texts = text_splitter.split_text(temp)
                    pages.append(text_splitter.create_documents(texts)[0])
                    f1.wrtie(temp)
    
    print(pages)
    print(len(pages))
    print(pages[78].page_content)
    
    embeddings = OpenAIEmbeddings(openai_api_key = "APP KEY")
    db = FAISS.from_documents(pages, embeddings)
    db.save_local('./','faiss')
```
<br/>3) 사용자의 특성에 맞는 데이터를 뽑습니다. (ex) 24세 심하지 않은 장애)
```python
    query = 'target: 24 '  # 만 24세 기준
    retrieved_pages = db.similarity_search_with_relevance_scores(query, k=20)  # 유사도 상위 20개
    retrieved_contents = "\n".join([p[0].page_content for p in retrieved_pages])
```
<br/>4) 위에서 만든 벡터 데이터와 함께 chat 모델을 정의하고 사용합니다.
```python
    from langchain.chat_models import ChatOpenAI
    from langchain.prompts.chat import (
        ChatPromptTemplate,
        SystemMessagePromptTemplate,
        HumanMessagePromptTemplate,
    )

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
    
    from langchain.chains import LLMChain
    
    chain = LLMChain(llm=chat, prompt=chat_prompt)
    query = "24세 이상인 심하지 않은 장애인이 받을 수 있는 복지는 뭐가 있지?"
    
    response = chain.run(question=query, docs=retrieved_contents)
    response = response.replace("\n", "")
    
    print(response)

    #결과
    <distinction: 혜택, 복지, 지원금, id: [25, 56, 52, 14, 19]>
```
<br/>자소서 작성 도우미 모델도 4번 과정과 같습니다.<br/><br/><br/>
  
## 5. 시연영상 💻

 #### [Youtube](https://youtu.be/VHYGwGR2M84)<br/><br/><br/>

## 6. 팀원 👨‍👨‍👧‍👦
컴퓨터학부<br/>
<table>
  <tr>
    <td><a href="https://github.com/Apoliasm">신영재</a></td>
    <td><a href="https://github.com/Lucerna00">박준석</td>
    <td><a href="https://github.com/WannaBeTop">신동혁</td>
    <td><a href="https://github.com/Usimth">이승운</td>
  </tr>
  <tr>
    <td>팀장,Backend</td>
    <td>디자인,AI</td>
    <td>Frontend</td>
    <td>Frontend</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Apoliasm">
        <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/576d230f-0a78-46f5-869c-ed5717cfc614" width="180px" height = "180px" />
      </a>
   </td>
    <td>
      <a href="https://github.com/Lucerna00">
        <img style="border: 0px solid black !important; border-radius:50%; " src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/e3837edf-b81f-4f38-ad58-3139d996caef" width="180px" height = "180px" />
      </a>
   </td>
    <td>
      <a href="https://github.com/WannaBeTop">
        <img style="border: 0px solid black !important; border-radius:50%; " src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/e8c1beee-db7f-48ca-b8e3-c14f3493e414" width="180px" height = "180px" />
      </a>
   </td>
     <td>
       <a href="https://github.com/Usimth">
        <img style="border: 0px solid black !important; border-radius:50%; " src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/f5c8a24d-0c18-489f-966d-06a209d0ea0f" width="180px" height = "180px" />
       </a>
   </td>
  </tr>
</table>
