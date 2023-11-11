import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Common.css";

const { kakao } = window;

function Welfare() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.888039, 128.611373),
            level: 3
        };
        new kakao.maps.Map(container, options);
    }, []);

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    복지관
                </div>
                <div id="map" style={{
                    width: '100%',
                    height: '70vh'
                }}></div>
            </div>
        </div>
    )
}

export default Welfare;