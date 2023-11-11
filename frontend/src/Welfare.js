import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Common.css";

const { kakao } = window;

function Welfare() {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);

    const handleBackClick = () => {
        navigate('/');
    };

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.888039, 128.611373),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        axios.get(`http://127.0.0.1:8000/father/location`)
            .then((res) => {
                const data = res.data;
                setLocations(data);
                data.forEach((location) => {
                    const { lat, lon } = location;
                    const markerPosition = new kakao.maps.LatLng(lat, lon);
                    const marker = new kakao.maps.Marker({ position: markerPosition });
                    marker.setMap(map);
                });
            }).catch((error) => {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <div>
            <div className="backdrop">
                <div className="upper2">
                    <button className="upper2-button" onClick={handleBackClick}>←</button>
                    복지관
                </div>
                <div>검색창 올부분</div>
                <div id="map" style={{
                    borderRadius:'25px',
                    width: '100%',
                    height: '70vh'
                }}></div>
            </div>
        </div>
    )
}

export default Welfare;
