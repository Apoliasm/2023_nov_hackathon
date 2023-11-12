import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Common.css";
import MapSearchBar from './MapSearchBar';

const { kakao } = window;

function Welfare() {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("");

    const handleBackClick = () => {
        navigate('/');
    };

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = () => {
        // 이 함수에서 원하는 동작을 수행하세요.
        
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
                    const { lat, lon, name, tel, address } = location;
                    const markerPosition = new kakao.maps.LatLng(lat, lon);
                    const marker = new kakao.maps.Marker({ position: markerPosition });
                    marker.setMap(map);

                    let iwContent = 
                        `<div style="padding:5px;">
                            이름: ${name}<br>
                            주소: ${address}
                        </div>`;
                    
                    if (tel != "nan") {
                        iwContent = 
                        `<div style="padding:5px;">
                            이름: ${name}<br>
                            전화번호: ${tel}<br>
                            주소: ${address}
                        </div>`;
                    }

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
                <div>
                    <MapSearchBar search={search} onChange={onChange} onClick={onClick}/>
                </div>
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
