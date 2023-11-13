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
  
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/85c11eeb-66b7-48b6-aef9-21f4960c4fbf" width="700px" height = "440px" />

  
  <br/>1) 사용자의 메시지를 메시지 배열에 추가한 뒤, 입력필드를 비웁니다.
  
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/2bbb20e3-43b8-40c3-bc4c-1fc1f0926177" width="700px" height = "580px" />

  
  <br/>2) 서버로 메시지를 POST 요청으로 전송하며, 이후 서버에서 응답을 받으면 챗봇의 답변을 메시지 배열에 추가합니다.
  
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/a1b29926-49cc-4acb-8637-91a37f7e86ac" width="700px" height = "320px" />

  
  <br/>3) 구성된 메시지 배열을 MessageList 컴포넌트에서 순회하며 각 메시지에 대한 Message 컴포넌트를 생성하여 보여줍니다.
  
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/7ee91c78-a4a7-48e0-9560-91f18833fc93" width="375px" height = "760px" />

  
### ⦁ Backend
#### Django Framework를 통한 REST API를 설계하였습니다.
<img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/3fc1abfd-bd27-4435-9818-60ff2c01994b" width="375px" height = "650px" /></br>
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

<img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/e8b9fad6-9dbf-4f9a-b1b2-0e04fc0231d6" width="700px" height = "550px" />


<br/>3) 사용자의 특성에 맞는 데이터를 뽑습니다. (ex) 24세 심하지 않은 장애)

<img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/ec864999-5aad-4101-bbee-6a5b2a0a8d0e" width="700px" height = "120px" />


<br/>4) 위에서 만든 벡터 데이터와 함께 chat 모델을 정의하고 사용합니다.
<img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/95912522/7fc77a6a-5c57-4ebd-b498-4a3d171e75e8" width="700px" height = "440px" />

<br/>자소서 작성 도우미 모델도 4번 과정과 같습니다.<br/><br/><br/>
  
## 5. 시연영상 💻

 #### [Youtube](https://www.youtube.com)<br/><br/><br/>

## 6. 팀원 👨‍👨‍👧‍👦
컴퓨터학부<br/>
|신영재|박준석|신동혁|이승운|
|---|---|---|---|
|팀장, Backend|디자인, AI|Frontend|Frontend|
