import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Common.css";
import "./MyInfo.css";

function MyInfo() {
    const user_info = '3'; //3급 장애인을 key로 설정. 서버로 GET요청을 보낸다.
    
    const [view, setView] = useState("available");

    const availableList = [/* 신청 가능한 리스트 데이터 */];
    const completedList = [/* 신청 완료한 리스트 데이터 */];

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };
    
    const handleClickAvailable = () => {
        setView("available");
    };

    const handleClickCompleted = () => {
        setView("completed");
    };

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    내 정보
                </div>
                <div className="button-container">
                    <button className={`left-button ${view === "available" ? "selected" : ""}`} onClick={handleClickAvailable}>신청 가능</button>
                    <button className={`right-button ${view === "completed" ? "selected" : ""}`} onClick={handleClickCompleted}>신청 완료</button>
                </div>
                {view === "available" ? (
                    <div>
                        {availableList.length > 0 ? (
                            availableList.map(item => (
                                <div key={item.id}>{item.name}</div>
                            ))
                        ) : (
                            <div>가능한 신청이 없습니다.</div>
                        )}
                    </div>
                ) : (
                    <div>
                        {completedList.length > 0 ? (
                            completedList.map(item => (
                                <div key={item.id}>{item.name}</div>
                            ))
                        ) : (
                            <div>완료한 신청이 없습니다.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyInfo;