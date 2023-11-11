import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Common.css";
import "./benefit.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

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

function MyModal(props) {
    const navigate = useNavigate();
    if (!props.card) {
        return null; 
    }

    // modalContent를 '/' 기준으로 분리
    const modalContentParagraphs = props.card.modalContent.split('/');

    const handleApplyButtonClick = () => {
        // Navigate to the application page
        navigate('/applypage');  //임시로 넣어 둠
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.card.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.card.modalTitle}</p>
          {modalContentParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' }}>
            <Button onClick={handleApplyButtonClick} className="custom-button">신청</Button>
        </Modal.Footer>

      </Modal>
    );
}



function Benefit() {
    const [cards, setCards] = useState([
        { title: '장애수당', text: '생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 장애인 중 장애인연금법 상 중증장애인이 아닌 국민기초생활보장수급자 및 차상위 계층에게 지원합니다./소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. \n 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애(아동)수당' },
        { title: '장애인 연금', text: '장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 중중장애인 중 소득인정액이 보건복지부장관이 매년 결정·고시하는 금액 이하인 경우에 지원합니다./* 참고: 「장애인연금법」 제2조제1호, 「장애인연금법」 시행령 제2조, 장애정도판정기준(제5장 장애인연금 수급을 위한 중증장애인 판정기준)/소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애인연금' },
        { title: '장애수당', text: '생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 장애인 중 장애인연금법 상 중증장애인이 아닌 국민기초생활보장수급자 및 차상위 계층에게 지원합니다./소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. \n 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애(아동)수당' },
        { title: '장애인 연금', text: '장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 중중장애인 중 소득인정액이 보건복지부장관이 매년 결정·고시하는 금액 이하인 경우에 지원합니다./* 참고: 「장애인연금법」 제2조제1호, 「장애인연금법」 시행령 제2조, 장애정도판정기준(제5장 장애인연금 수급을 위한 중증장애인 판정기준)/소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애인연금' },
        { title: '장애수당', text: '생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 장애인 중 장애인연금법 상 중증장애인이 아닌 국민기초생활보장수급자 및 차상위 계층에게 지원합니다./소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. \n 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애(아동)수당' },
        { title: '장애인 연금', text: '장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 중중장애인 중 소득인정액이 보건복지부장관이 매년 결정·고시하는 금액 이하인 경우에 지원합니다./* 참고: 「장애인연금법」 제2조제1호, 「장애인연금법」 시행령 제2조, 장애정도판정기준(제5장 장애인연금 수급을 위한 중증장애인 판정기준)/소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애인연금' },
        { title: '장애수당', text: '생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 장애인 중 장애인연금법 상 중증장애인이 아닌 국민기초생활보장수급자 및 차상위 계층에게 지원합니다./소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. \n 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애(아동)수당' },
        { title: '장애인 연금', text: '장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.', buttonText: '자세히 보기', modalTitle: '구분: 혜택, 복지, 지원금', modalContent: '대상: 18세 이상의 등록한 중중장애인 중 소득인정액이 보건복지부장관이 매년 결정·고시하는 금액 이하인 경우에 지원합니다./* 참고: 「장애인연금법」 제2조제1호, 「장애인연금법」 시행령 제2조, 장애정도판정기준(제5장 장애인연금 수급을 위한 중증장애인 판정기준)/소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다. 방법: 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애인연금' }
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


      //modal
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [modalShow, setModalShow] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);

    const handleModalOpen = (card) => {
        setCurrentCard(card);
        setModalShow(true);
    };

    return (
        <div>
            <div className="upper2">
                <button className="upper2-button" onClick={handleBackClick}>←</button>
                혜택
            </div>

            <div className="background">
                <div style={{ position: "relative", height: "500px" }} className="my-chat-container">
                    {cards.map((card, index) => (
                        <Card key={index} className="text-center" style={{ marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Button onClick={() => handleModalOpen(card)} className="custom-button">{card.buttonText}</Button>
                            </Card.Body>
                        </Card>
                        
                    ))}

                    <MyModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        card={currentCard}
                    />
                
                </div>
            </div>
        </div>
    );
}



export default Benefit;
