import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Common.css";
import './Welfare.css';

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
            level: 5
        };
        const map = new kakao.maps.Map(container, options);

        axios.get(`http://127.0.0.1:8000/father/location`)
            .then((res) => {
                const data = res.data;
                setLocations(data);
                data.forEach((location) => {
                    const { lat, lon, name, tel, address } = location;
                    const markerPosition = new kakao.maps.LatLng(lat, lon);
                    const marker = new kakao.maps.Marker({ position: markerPosition });
                    marker.setMap(map);

                    let iwContent = 
                    `<div class="overlay">
                        <div class="close"}>×</div>
                        <div class="title">${name}</div>
                        <div class="address">${address}</div>`+
                        (tel != "nan" ? `<div class="tel">${tel}</div>`:``)
                    +`</div>`;

                    const iwPosition = markerPosition; 
                    
                    const infowindow = new kakao.maps.InfoWindow({
                        position : iwPosition, 
                        content : iwContent 
                    });
                    
                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                        infowindow.open(map, marker); 
                    });

                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                        infowindow.close();
                    });
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
                    margin: '15px',
                    height: '70vh'
                }}></div>
            </div>
        </div>
    )
}

export default Welfare;
