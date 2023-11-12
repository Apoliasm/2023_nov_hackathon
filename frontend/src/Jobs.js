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
          <Modal.Title id="contained-modal-title-vcenter">
            {props.card.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>{props.card.title}</p> */}
          {Array.isArray(props.card.description) ? (
            props.card.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{props.card.description}</p>
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
      axios.get('/api/jobs')  // 백엔드 주소 입력하기!!.
        .then(response => {
          setJobs(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);
  
    const [jobs, setJobs] = useState([
      { id: '1', title: '풋락커코리아 매장 장애인 아르바이트 채용 (전지점 채용중)', description: 'Develop and maintain software' },
      { id: '2', title: '에스앤에스 컴퍼니 직영 매장 토끼정 채용공고', description: 'Develop and maintain software' },
      { id: '3', title: '[장애인/주3일] 백화점 매장 조리 및 판매서비스 장애인 직원 모집', description: 'Develop and maintain software' }
    ]);
  
    const onChange = (e) => {
      setSearch(e.target.value);
    };
  
    const filteredJobs = search.trim() === "" ? jobs : jobs.filter((job) => {
      return job.title.replace(" ", "").includes(search.toLocaleLowerCase().replace(" ", ""));
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
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
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
