  // Jobs.js
  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router";
  import axios from 'axios';
  import "./Common.css";
  import "./benefit.css";
  import SearchBar from './SearchBar';
  import Job from './Job.js';


  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import Modal from 'react-bootstrap/Modal';

  function MyModal(props) {
    const navigate = useNavigate();  // useNavigate 훅을 새로 선언

    if (!props.card) {
        return null; 
    }

    const handleApplyButtonClick = () => {
        // Navigate to the application page
        navigate(`/applypage/${props.card.id}`);
    };

    


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '25px', fontWeight: 'bold' }}>
            {props.card.hire_title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Array.isArray(props.card.근무조건) ? (
            props.card.근무조건.map((근무, index) => (
              <div key={index}>
                <p><b>고용형태</b>: {근무.고용형태}</p>
                <p><b>계약기간</b>: {근무.계약기간}</p>
                <p><b>급여조건</b>: {근무.급여조건}</p>
                <p><b>근무지역</b>: {근무.근무지역}</p>
              </div>
            ))
          ) : (
            Object.entries(props.card.근무조건).map(([key, value]) => (
              <p key={key}><b>{key}</b>: {value}</p>
            ))
          )}
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: 'center' }}>
            <Button onClick={handleApplyButtonClick} className="custom-button">신청</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Jobs() {
    const navigate = useNavigate();
    const handleBackClick = () => {
      navigate('/');
    };
  
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/father/hire')  // 백엔드 주소 입력하기!!.
        .then(response => {
          setJobs(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);
  
    const [jobs, setJobs] = useState([]);
  
    const onChange = (e) => {
      setSearch(e.target.value);
    };
  
    const filteredJobs = search.trim() === "" ? jobs : jobs.filter((job) => {
      return job.hire_title.replace(" ", "").includes(search.toLocaleLowerCase().replace(" ", ""));
    });
  
    const [modalShow, setModalShow] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
  
    const handleModalOpen = (card) => {
      setCurrentCard(card);
      setModalShow(true);
    };
  
    return (
      <div>
        <div className="backdrop">
          <div className="upper2">
            <button className="upper2-button" onClick={handleBackClick}>←</button>
            일자리
          </div>
          <div>
            <SearchBar search={search} onChange={onChange} />
          </div>
  
          <div style={{ position: "relative", height: "500px" }} className="my-chat-container">
            {filteredJobs.map((card, index) => (
              <Card key={index} className="text-center" style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>{card.hire_title}</Card.Title>
                  
                  <Card.Text>
                    <div key={index} style={{ fontSize: '14px' }}>
                      <p><b>학력사항</b>: {card.지원자격.학력사항} </p>
                      <p><b>경력사항</b>: {card.지원자격.경력사항}</p>
                      <p><b>장애인 채용</b>: {card.지원자격.장애인채용}</p>
                      <p><b>우대사항</b>: {card.지원자격.우대사항}</p>
                    </div>
                  </Card.Text>


                  
                  <Button onClick={() => handleModalOpen(card)} className="custom-button">자세히 보기</Button>
                </Card.Body>
              </Card>
            ))}
  
            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              card={currentCard}
            />
          </div>
  
          {/* <div>
            {filteredJobs.map((job, index) => (
              <Job key={index} id={job.id} title={job.title} description={job.description} />
            ))}
          </div> */}
        </div>
      </div>
    );
  }

  export default Jobs;
