import React from "react";
import { useNavigate } from "react-router";
import "./Common.css";

function Benefit() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    혜택
                </div>
            </div>
        </div>
    )
}
export default Benefit;