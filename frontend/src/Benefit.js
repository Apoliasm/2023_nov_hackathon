import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Common.css";
import "./benefit.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {
    Search,
    // MessageGroup,
    // MessageSeparator,
    // Avatar,
    // MainContainer,
    // ChatContainer,
    // MessageList,
    // Message,
    // MessageInput,
} from "@chatscope/chat-ui-kit-react";

function Benefit() {
    const [cards, setCards] = useState([
        { title: '장애수당', text: '생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다', buttonText: '자세히 보기' },
        { title: '장애인 연금', text: '장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.', buttonText: '자세히 보기' }
        // 추가적인 데이터 오면 동적으로 ..
    ]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSearchChange = (newValue) => {
        setSearchValue(newValue);
    };

    const handleSearchClear = () => {
        setSearchValue("");
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Enter 키가 눌렸을 때 실행되는 로직
            console.log("hello")
        }
        // 다른 키에 대한 로직 추가 가능
      };

    return (
        <div>
            <div className="upper2">
                <button className="upper2-button" onClick={handleBackClick}>←</button>
                혜택
            </div>

            <div className="background">
                <div style={{ position: "relative", height: "500px" }} className="my-chat-container">
                    <Search

                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        onClearClick={handleSearchClear}
                        onKeyDown={handleSearchKeyDown}

                        
                    />
                    {cards.map((card, index) => (
                        <Card key={index} className="text-center" style={{ marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Button className="custom-button">{card.buttonText}</Button>
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">{card.footer}</Card.Footer> */}
                        </Card>
                        
                    ))}
                
                </div>
            </div>
        </div>
    );
}

export default Benefit;
