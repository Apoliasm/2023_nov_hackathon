
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import avatarImage from './image/hopeAI.png'; //나중에 캐릭터이미지 불러올거임 ㅋㅋ
import userImage from './image/profile.jpg';
import "./Common.css";
import "./ChatBot.css";import { motion } from "framer-motion";
import Wrapper from './components/Wrapper';

import {
    Loader,
    MessageGroup,
    MessageSeparator,
    Avatar,
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";

function ChatBot() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    //상태 관리
    const [messages, setMessages] = useState([]);  //messages - 채팅창에 표시되는 메시지의 배열
    //setMessages 함수를 사용하여 새 메시지가 추가될 때마다 상태가 업데이트되어
    //화면에 새로운 메시지가 표시.
    const [inputValue, setInputValue] = useState("");  //inputValue -> 사용자가 입력한 현재 텍스트 값

    //이벤트 핸들러
    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleSendClick = async () => {   
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
        
        //POST 요청으로 http://127.0.0.1:8000/father/chat 에 json 형식으로 보내야 함
        const latestMessage = inputValue;
        const data1 = {
            question: latestMessage
        };
        const serverURL = "http://127.0.0.1:8000/father/chat"
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

                    setMessages((prevMessages) => [
                        ...prevMessages,
                        ...newMessages
                    ]);

                }else if (result.answer[0].type == "hire"){
                    const endnum = result.answer.length;
                    const startnum = 0;

                    const newMessages = [];

                    const newMessage = {
                        message: "회원님께 추천드릴 "+ result.answer.length +"개의 채용 정보가 있네요!", 
                        sentTime: "just now",
                        sender: "희망이",
                        direction: "incoming",
                        position: "single",
                        type: "text"
                    };

                    newMessages.push(newMessage);

                    for (let i = startnum; i < endnum; i++) {
                        var partdata = result.answer[i].info;

                        const messageContent = partdata.hire_title + "은(는) 어떠세요?\n" +
                            partdata.qualified_apply + partdata.qualified_education;

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

                    setMessages((prevMessages) => [
                        ...prevMessages,
                        ...newMessages
                    ]);
                                  
                }else{
                    resultdata = "저는 장애인을 위한 지원금 및 일자리 정보에 대해 특화된 AI에요. 다른 질문 및 이야기에는 답변드리기 힘들 것 같아요."
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                            message: resultdata,
                            sentTime: "just now",
                            sender: "희망이",
                            direction: "incoming",
                            position: "single", 
                            type: "text"
                        }
                    ]);
                }
            })
            .catch(error => {

                console.error("error:", error);
            });
    }

    return (
        <Wrapper>
        <div>
            <div className="upper2">
                <button className="upper2-button" onClick={handleBackClick}>←</button>
                chat
            </div>

            <div className="bg">
                <div style={{ position: "relative", height: "500px" }}>
                <MainContainer className="chat-container">
                    <ChatContainer>
                    <MessageList>
                        
                        <MessageSeparator>
                            <Avatar src={avatarImage} name="Zoe" />
                        </MessageSeparator>

                        <MessageGroup direction="incoming" sender="희망이" sentTime="just now">
                        <Avatar src={avatarImage} name="희망이" />      
                        <MessageGroup.Messages>
                            <Message model={{
                        message: "안녕하세요! 저는 희망을 주는 AI 비서 희망이에요!"
                        }} />
                            <Message model={{
                        message: "궁금한 게 있으면 무엇이든 말씀해 주세요!"
                        }} />
                            <Message model={{
                        message: "예시) 지금 받을 수 있는 지원금은 뭐가 있어?"
                        }} />
                        </MessageGroup.Messages>
                        <MessageGroup.Footer>희망이</MessageGroup.Footer>
                        </MessageGroup>
                        
    
                        {messages.map((msg, index) => (
                            <Message
                            key={index}
                            model={msg}
                            >
                            <Avatar src={msg.sender === "User" ? userImage : avatarImage} name={msg.sender} />
                            <Message.Footer sender={msg.sender} />
                            </Message>
                            
                        ))}

                        {/* messages 배열을 map 함수 이용해 순회하기
                        msg -> 현재 순회 중인 배열 요소 , index - 배열의 현재 index
                        각각의 msg에 대해 Message 컴포넌트 생성. 
                        key -> 요소식별에 사용되는 고유 키
                        model -> 해당 메시지 정보
                        결론적으로 messages 배열 순회하며 각 메시지에 대해 Message 컴포넌트 생성함*/}


                    </MessageList>
                    <MessageInput value={inputValue} onChange={handleInputChange} onSend={handleSendClick} placeholder="궁금한 거 물어보세요!" attachButton={false}/>                 
                    </ChatContainer>
                </MainContainer>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}

export default ChatBot;
