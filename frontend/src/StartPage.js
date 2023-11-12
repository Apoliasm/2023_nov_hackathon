import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Common.css";
import "./StartPage.css";

import Banner from './Banner';
import aiImage from './image/ai.png';
import benefitImage from './image/benefit.png';
import welfareImage from './image/welfare.png';
import jobsImage from './image/jobs.png';
import myinfoImage from './image/myinfo.png';
import bannerBg from './image/banner.png';


function StartPage() {

    const navigate = useNavigate();

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
            <div className="background">
                    <img src={bannerBg} style={{ width: "100%", height: "417px"}}/>
                    <div class="bannerdiv">
                        <Banner/>
                    </div>
                <div class="row g-0">
                    <div class="col-6 col-xl-3">
                        <button className="btn benefitbutton" onClick={handleBenefitClick}>
                            <img src={benefitImage} alt="혜택" />
                        </button>
                    </div>
                    <div class="col-6 col-xl-3">
                        <button className="btn welfarebutton" onClick={handleWelfareClick}>
                            <img src={welfareImage} alt="복지관" />
                        </button>
                    </div>
                    <div class="col-6 col-xl-3">
                        <button className="btn jobsbutton" onClick={handleJobsClick}>
                            <img src={jobsImage} alt="일자리" />
                        </button>
                    </div>
                    <div class="col-6 col-xl-3">
                        <button className="btn myinfobutton" onClick={handleMyInfoClick}>
                            <img src={myinfoImage} alt="내 정보" />
                        </button>
                    </div>
                </div>
                <button className="aibutton" onClick={handleAiClick}>
                    <img src={aiImage} alt="Ai" /> 
                </button>
            </div>
        </div>
    )
}

export default StartPage;