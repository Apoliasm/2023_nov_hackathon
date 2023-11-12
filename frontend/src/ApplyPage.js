import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import "./Common.css";
import "./benefit.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

    const handleBackClick = () => {
        navigate('/jobs');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            userID,
            experiences: [
                { whereWork: whereWork1, howLongWork: howLongWork1 },
                { whereWork: whereWork2, howLongWork: howLongWork2 },
                { whereWork: whereWork3, howLongWork: howLongWork3 }
            ],
            selfIntro
        };
        try {
            console.log(formData);
            const response = await axios.post('https://your-server-url.com', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    이력서
                </div>

                <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUserID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="id" placeholder="아이디를 입력하세요" onChange={e => setUserID(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWhereWork1">
                        <Form.Label>일했던 곳 #1</Form.Label>
                        <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork1(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHowLongWork1">
                        <Form.Label>일한 기간 #1</Form.Label>
                        <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork1(e.target.value)} />
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formSelfIntro">
                        <Form.Label>자기 소개란</Form.Label>
                        <Form.Control as="textarea" rows={8} onChange={e => setSelfIntro(e.target.value)} />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit" className="custom-button">
                        제출
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default ApplyPage;
