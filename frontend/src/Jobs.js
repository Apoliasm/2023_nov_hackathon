import React from "react";
import { useNavigate } from "react-router";
import "./Common.css";

function Jobs() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    일자리
                </div>
            </div>
        </div>
    )
}

export default Jobs;