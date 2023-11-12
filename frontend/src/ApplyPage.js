import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import "./Common.css";
import "./benefit.css"
import "./StartPage.css";
import Wrapper from './components/Wrapper';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import aiImage from './image/ai.png';

function ApplyPage() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState('');
    const [whereWork1, setWhereWork1] = useState('');
    const [howLongWork1, setHowLongWork1] = useState('');
    const [whereWork2, setWhereWork2] = useState('');
    const [howLongWork2, setHowLongWork2] = useState('');
    const [whereWork3, setWhereWork3] = useState('');
    const [howLongWork3, setHowLongWork3] = useState('');
    const [selfIntro, setSelfIntro] = useState('');
    var location = decodeURI(window.location.pathname);
    location = location.substring(11);    

    const handleBackClick = () => {
        navigate('/jobs');
    };

    const handleAiClick = async(e) => {
        e.preventDefault();
        try {
            const post_data = {
                'question': selfIntro,
                'title': location
            };
            const response = await axios.post('http://127.0.0.1:8000/father/resume', post_data);
            console.log(response.data);
            setSelfIntro(response.data.answer); // 가정: 응답 객체에 intro라는 필드가 자기소개 문자열을 담고 있다.
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        navigate('/jobs');
        // e.preventDefault();
        // const formData = {
        //     userID,
        //     experiences: [
        //         { whereWork: whereWork1, howLongWork: howLongWork1 },
        //         { whereWork: whereWork2, howLongWork: howLongWork2 },
        //         { whereWork: whereWork3, howLongWork: howLongWork3 }
        //     ],
        //     selfIntro
        // };
        // try {
        //     console.log(formData);
        //     const response = await axios.post('http://127.0.0.1:8000/father/resumesave', formData);
        //     console.log(response.data);
        //     <div
        //     className="modal show"
        //     style={{ display: 'block', position: 'initial' }}
        //     >
        //     <Modal.Dialog>
        //         <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //         </Modal.Header>

        //         <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //         </Modal.Body>

        //         <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save changes</Button>
        //         </Modal.Footer>
        //     </Modal.Dialog>
        //     </div>
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between', // 왼쪽과 오른쪽 사이의 간격을 최대화하는 스타일
    };

    return (
        <Wrapper>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    이력서
                </div>

                <div className="formDatas">
                    <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formUserID">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="id" placeholder="아이디를 입력하세요" onChange={e => setUserID(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formWhereWork1">
                                <Form.Label>일했던 곳</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork1(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHowLongWork1">
                                <Form.Label>일한 기간</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork1(e.target.value)} />
                            </Form.Group>
                        
                            {/*
                            <Form.Group className="mb-3" controlId="formWhereWork2">
                                <Form.Label>일했던 곳 #2</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork2(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHowLongWork2">
                                <Form.Label>일한 기간 #2</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork2(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formWhereWork3">
                                <Form.Label>일했던 곳 #3</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork3(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHowLongWork3">
                                <Form.Label>일한 기간 #3</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork3(e.target.value)} />
                            </Form.Group>
                            */}

                            <Form.Group className="mb-3" controlId="formSelfIntro">
                                <Form.Label>자기소개</Form.Label>
                                <Form.Control as="textarea" value={selfIntro} rows={8} onChange={e => setSelfIntro(e.target.value)} />
                            </Form.Group>
                            {/* <Row className="mb-3">
                                <Form.Group as={Col} controlId="formWhereWork1">
                                <Form.Label>일했던 곳 #1</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork1(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formHowLongWork1">
                                <Form.Label>일한 기간 #1</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork1(e.target.value)}/>
                                </Form.Group>
                            </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formWhereWork2">
                                <Form.Label>일했던 곳 #2</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork2(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formHowLongWork2">
                                <Form.Label>일한 기간 #2</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork2(e.target.value)}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formWhereWork3">
                                <Form.Label>일했던 곳 #3</Form.Label>
                                <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork3(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formHowLongWork3">
                                <Form.Label>일한 기간 #3</Form.Label>
                                <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork3(e.target.value)}/>
                            </Form.Group> */}
                        {/* </Row> */}

                        
                        <div style={buttonContainerStyle}>
                            <Button variant="primary" className="custom-button" onClick={handleAiClick}>
                                행복이에게 도움 받기!
                            </Button>

                            <Button variant="secondary" type="submit" > 
                                제출
                            </Button>
                        </div>
                        {/* <button className="aibutton" onClick={handleAiClick}>
                            <img src={aiImage} alt="Ai" /> 
                        </button> */}
                    </Form> 
                </div>
            </div>
        </Wrapper>
    )
}

export default ApplyPage;
