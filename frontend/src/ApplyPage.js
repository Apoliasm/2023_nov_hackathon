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
    const [whereWork, setWhereWork] = useState('');
    const [howLongWork, setHowLongWork] = useState('');
    const [selfIntro, setSelfIntro] = useState('');

    const handleBackClick = () => {
        navigate('/jobs');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { userID, whereWork, howLongWork, selfIntro };
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
                        <Form.Control type="id" placeholder="Please write your ID" onChange={e => setUserID(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWhereWork">
                        <Form.Label>일했던 곳</Form.Label>
                        <Form.Control type="string" placeholder="어디서 일하셨나요?" onChange={e => setWhereWork(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHowLongWork">
                        <Form.Label>일한 기간</Form.Label>
                        <Form.Control type="string" placeholder="얼마나 일하셨나요?" onChange={e => setHowLongWork(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSelfIntro">
                        <Form.Label>자기 소개란</Form.Label>
                        <Form.Control as="textarea" rows={8} onChange={e => setSelfIntro(e.target.value)} />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit" className="custom-button">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default ApplyPage;
