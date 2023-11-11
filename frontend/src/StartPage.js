import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Common.css";
import "./StartPage.css";

import aiImage from './image/ai.png';
import benefitImage from './image/benefit.png';
import welfareImage from './image/welfare.png';
import jobsImage from './image/jobs.png';
import myinfoImage from './image/myinfo.png';

function StartPage() {

    const navigate = useNavigate();
    //버튼 클릭 handler
    const handleAiClick = () => {
        navigate('/ChatBot');
    };
    const handleBenefitClick = () => {
        navigate('/benefit');
    };
    const handleWelfareClick = () => {
        navigate('/welfare');
    };
    const handleJobsClick = () => {
        navigate('/jobs');
    };
    const handleMyInfoClick = () => {
        navigate('/myinfo');
    };

    return (
        <div>
            <div className="upper">
            </div>
            <div className="background">
                <div className="layer1">
                    <button className="benefitbutton" onClick={handleBenefitClick}>
                        <img src={benefitImage} alt="혜택" />
                    </button>
                    <button className="welfarebutton" onClick={handleWelfareClick}>
                        <img src={welfareImage} alt="복지관" />
                    </button>
                </div>
                <div className="layer2">
                <button className="jobsbutton" onClick={handleJobsClick}>
                        <img src={jobsImage} alt="일자리" />
                    </button>
                    <button className="myinfobutton" onClick={handleMyInfoClick}>
                        <img src={myinfoImage} alt="내 정보" />
                    </button>
                </div>
                <button className="aibutton" onClick={handleAiClick}>
                    <img src={aiImage} alt="Ai" /> 
                </button>
            </div>
        </div>
        
    )
}

export default StartPage;