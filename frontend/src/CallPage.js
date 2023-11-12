
import React from "react";
import { useNavigate } from "react-router";
import "./Common.css";
import Button from 'react-bootstrap/Button';



function ApplyPage() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/benefit');
    };

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    전화번호 정보
                
                </div>
            </div>
        </div>
    )
}

export default ApplyPage;