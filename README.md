<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=2023_nov_hackathon&fontSize=70" />

## 1. 팀명👨‍👨‍👧‍👦

#### &nbsp;2023 대구를 빛내는 해커톤 8조 : "희망이 아빠"

## 2. 제출 타입 및 주제 

#### &nbsp;세션 : S타입
#### &nbsp;주제 : "희망이. 대구에 거주하는 장애인을 위한 개인 비서"

## 3. 프로젝트 한 줄 소개 📌

#### &nbsp;"희망이는 대구 거주 장애인의 일자리 및 혜택 안내 서비스입니다."

## 4. 프로젝트에 활용된 기술 🔧
 
 #### ⦁ Frontend
  #### React와 Chat-UI-Kit 라이브러리를 사용한 챗봇 인터페이스를 구축했습니다.
  서버에서 응답을 받으면, 챗봇의 답변을 메시지 배열에 추가합니다.
  <br/>이벤트 핸들러 함수로 handleInputChange 함수와 handleSendClick 함수를 사용했습니다.
  <br/>handleSendClick함수는 사용자가 메시지를 보내려고 할 때 호출되며 기능은 다음과 같습니다.
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/85c11eeb-66b7-48b6-aef9-21f4960c4fbf" width="700px" height = "500px" />
  <br/>1)사용자의 메시지를 메시지 배열에 추가한 뒤, 입력필드를 비웁니다.
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/2bbb20e3-43b8-40c3-bc4c-1fc1f0926177" width="700px" height = "700px" />
  <br/>2)서버로 메시지를 POST 요청으로 전송하며, 이후 서버에서 응답을 받으면 챗봇의 답변을 메시지 배열에 추가합니다.
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/a1b29926-49cc-4acb-8637-91a37f7e86ac" width="900px" height = "500px" />
  <br/>3)구성된 메시지 배열을 MessageList 컴포넌트에서 순회하며 각 메시지에 대한 Message 컴포넌트를 생성하여 보여줍니다.
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/8a1810f1-b6ab-43d0-8cd6-92006c014418" width="375px" height = "812px" />
  <br/>구현이후 페이지는 다음과 같습니다.
 #### ⦁ Backend
  #### Django Framework를 통한 REST API를 설계했습니다.
  <img style="border: 0px solid black !important; border-radius:50%;" src="https://github.com/Apoliasm/2023_nov_hackathon/assets/113246980/3fc1abfd-bd27-4435-9818-60ff2c01994b" width="750px" height = "1200px" />
  </br>
  manage.py를 통해 Django Framework의 서버 실행 및 전반적인 관리를 담당했습니다.<br/><br/>
   /benefit, /welfare, /jobs로부터 GET request를 받거나, <br/>
   /myinfo, /jobs, 로부터 사용자의 정보가 포함된 POST request를 받아 backend/fatherapp/view.py에서 REST API를 처리합니다. <br/>
   /chatbot /applypage 에서 사용자의 질문에 따라 backend/fatherapp/view.py와 backend/ai의 module을 활용해 생성형AI의 반응을 형성하며 사용자와 상호작용합니다. <br/>
  models.py로 파이썬 특유의 ORM(Object Relational Mapping)을 이용하여 데이터베이스를 생성하고 탐색등을 진행할 수 있습니다.<br/><br/>
  또한 사용자가 가진 특성에 따라 다른 출력값이 나타나도록 데이터 상호작용 로직을 확립했습니다. <br/> 
  view.py에서 APIView의 메소드를 이용해 사용자가 이용할 페이지와의 전반적인 상호작용 로직을 처리했습니다. <br/> 
  또한 파이썬 기반의 API를 이용해 생성형 AI 활용으로 확장했습니다. <br/> 
  ai/apply_model.py, benefit_job_model.py등의 모듈을 이용해 사용자의 질문 등에 따라 생성형ai의 상호작용을 도왔습니다. <br/> 
  
 #### ⦁ AI
  
## 5. 시연영상 💻

 #### -[Youtube](https://www.youtube.com)
