import React from "react";
import { useNavigate } from "react-router";
import "./CallPage.css";
import Button from 'react-bootstrap/Button';
import Wrapper from './components/Wrapper';

function ApplyPage() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/benefit');
    };

    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <Wrapper>
            <div>
                <div className="backdrop" style={centerStyle}>
                    <div className="upper2">
                        <button className="upper2-button" onClick={handleBackClick}>←</button>
                        전화번호 정보
                    </div>
                    <div style={{ textAlign: 'center' }} className="cencen">
                        <h5><b>사단법인 한국장애인단체총연합회</b></h5>
                        <p>02-784-3501</p>
                        <h5><b>사단법인 대구광역시지체장애인협회</b></h5>
                        <p>053-954-0170</p>
                        <h5><b>사단법인 대구광역시시각장애인연합회</b></h5>
                        <p>053-253-2655, 053-253-2755</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ApplyPage;
