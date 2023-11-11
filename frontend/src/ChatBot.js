
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import avatarImage from './image/ai.png'; //나중에 캐릭터이미지 불러올거임 ㅋㅋ
import userImage from './image/chanho.jpg';
import "./Common.css";
import "./ChatBot.css";

import {
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
    
        // 챗봇의 답변  (0.1초 후)
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: "Siuuuuuuuuuuuuuuuuuuuuuuuuuu",
                    sentTime: "just now",
                    sender: "ChatBot",
                    direction: "incoming",
                    position: "single",
                    type: "text"
                }
            ]);
        }, 100); //0.1 초 지연 후 챗봇 메시지 추가
    }


    return (
        <div>
            <div className="upper2">
                <button className="upper2-button" onClick={handleBackClick}>←</button>
                chat
            </div>

            <div className="background">
                <div style={{ position: "relative", height: "500px" }}>
                <MainContainer className="chat-container">
                    <ChatContainer>
                    <MessageList>
                        
                        <MessageSeparator>
                            <Avatar src={avatarImage} name="Zoe" />
                        </MessageSeparator>

                        {/* <MessageGroup direction="incoming" sender="Emily" sentTime="just now">
                        <Avatar src={avatarImage} name="Emily" />      
                        <MessageGroup.Messages>
                            <Message model={{
                        message: "Hello my friend"
                        }} />
                        </MessageGroup.Messages>
                        <MessageGroup.Footer>Message group footer</MessageGroup.Footer>
                        </MessageGroup> */}

                        {messages.map((msg, index) => (
                            <Message
                            key={index}
                            model={msg}
                            >
                            <Avatar src={msg.sender === "User" ? userImage : avatarImage} name={msg.sender} />
                            </Message>
                        ))}

                        {/* messages 배열을 map 함수 이용해 순회하기
                        msg -> 현재 순회 중인 배열 요소 , index - 배열의 현재 index
                        각각의 msg에 대해 Message 컴포넌트 생성. 
                        key -> 요소식별에 사용되는 고유 키
                        model -> 해당 메시지 정보
                        결론적으로 messages 배열 순회하며 각 메시지에 대해 Message 컴포넌트 생성함*/}


                    </MessageList>
                    <MessageInput value={inputValue} onChange={handleInputChange} onSend={handleSendClick} placeholder="Type message here"/>                 
                    </ChatContainer>
                </MainContainer>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;
