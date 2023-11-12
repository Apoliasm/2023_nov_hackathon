import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import "./Common.css";
import "./MyInfo.css";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyInfo() {
    const user_info = '3'; //3급 장애인을 key로 설정. 서버로 GET요청을 보낸다.
    /* test시 주석 삭제. 아래 더미데이터 삭제.
    // 서버 통신 관련
    const [benefit, setBenefit] = useState([]);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get(`benefitURL`) // 혜택 GET해오는 URL
            .then(response => {
                setbenefit(response.data);
            })
            .catch(error => console.error('혜택정보를 불러오는데 실패했습니다.',error));
    }, []);
    
    useEffect(() => {
        axios.get('jobsURL') // 일자리 정보 GET해오는 URL
            .then(response => {
                setjobs(response.data);
            })
            .catch(error => console.error('일자리정보를 불러오는데 실패했습니다.', error));
    }, []);
    
    const [compbenefit, setcompBenefit] = useState([]);
    const [compjobs, setcompJobs] = useState([]);

    useEffect(() => {
        axios.get(`compbenefitURL`) // 신청완료한 혜택 GET해오는 URL
            .then(response => {
                setbenefit(response.data);
            })
            .catch(error => console.error('신청 완료한 혜택정보를 불러오는데 실패했습니다.',error));
    }, []);
    
    useEffect(() => {
        axios.get('compjobsURL') // 신청완료한 일자리 정보 GET해오는 URL
            .then(response => {
                setjobs(response.data);
            })
            .catch(error => console.error('신청 완료한 일자리정보를 불러오는데 실패했습니다.', error));
    }, []);
    */
    // Modal 관련 상태
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const [modalType, setModalType] = useState(""); // "" 혹은 "benefit" 혹은 "job"

    const handleClose = () => setShow(false);
    const handleShowBenefit = (info) => {
        setModalInfo(info);
        setModalType("benefit");
        setShow(true);
    }
    const handleShowJob = (job) => {
        setModalInfo(job);
        setModalType("job");
        setShow(true);
    }

    const [view, setView] = useState("available");
    const [benefit, setbenefit]=useState([
        {"id": 1,
        "type": " 혜택, 복지, 지원금",
        "service": " 장애수당",
        "content": " 생활이 어려운 장애인에게 장애수당을 지급하여 생활의 안정을 돕습니다",
        "target": " 18세 이상의 등록한 장애인 중 장애인연금법 상 중증장애인이 아닌 국민기초생활보장수급자 및 차상위 계층에게 지원합니다./소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다.",
        "how": " 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애(아동)수당",
        "user_id": []},
        {
            "id": 2,
            "type": " 혜택, 복지, 지원금",
            "service": " 장애인연금",
            "content": " 장애로 인하여 생활이 어려운 중증장애인의 안정된 삶을 위해 연금을 지급합니다.",
            "target": " 18세 이상의 등록한 중중장애인 중 소득인정액이 보건복지부장관이 매년 결정·고시하는 금액 이하인 경우에 지원합니다./* 참고: 「장애인연금법」 제2조제1호, 「장애인연금법」 시행령 제2조, 장애정도판정기준(제5장 장애인연금 수급을 위한 중증장애인 판정기준)/소득인정액, 연령, 기타 기준은 선정기준의 내용을 참고해주시기 바랍니다.",
            "how": " 읍면동 주민센터에 방문하여 신청하거나 복지로(bokjiro.go.kr)를 통해 온라인으로 신청이 가능합니다./복지로 온라인신청 경로 : 복지로 로그인 > 서비스 신청 > 복지서비스 신청 > 복지급여 신청 > 장애인 > 장애인연금",
            "user_id": []
        }
    ])
    const [jobs, setjobs] = useState([
        {
            "id": 1,
            "hire_title": "풋락커코리아 매장 장애인 아르바이트 채용 (전지점 채용중)",
            "지원자격": {
                "경력사항": "경력무관",
                "학력사항": "경력무관",
                "장애인채용": "경력무관",
                "우대사항": "경력무관"
            },
            "근무조건": {
                "고용형태": "정규직",
                "계약기간": "",
                "급여조건": "시급\n(10,367원~12,400원)",
                "근무지역": "서울 용산구\n서울 용산구\n부산 중구",
                "직급": "사원급",
                "직책": "팀원"
            },
            "제출": {
                "접수기간": "2023.07.21 ~ (채용 시 마감)",
                "접수방법": "장애인채용포털 접수, 이메일",
                "접수 이메일": "hr.apac@footlocker.com",
                "제출 서류": ""
            },
            "근무환경": {
                "근무지역": "서울 용산구",
                "근무요일": "협의가능",
                "근무시간": "주 16시간",
                "복리후생": "연차, 매년 유급 병가 10일, 직원 할인, 분기별 보너스, 유니폼, 4대보험, 단체실손보험, 명절선물, 경조휴가, 퇴직연금 가입",
                "장애인편의시설": ""
            },
            "담당자": {
                "담당자": "HR",
                "전화번호": "010-7479-2905",
                "이메일": "@"
            }
        },
        {
            "id": 2,
            "hire_title": "에스앤에스 컴퍼니 직영 매장 토끼정 채용공고",
            "지원자격": {
                "경력사항": "경력무관",
                "학력사항": "경력무관",
                "장애인채용": "경력무관",
                "우대사항": "경력무관"
            },
            "근무조건": {
                "고용형태": "정규직",
                "계약기간": "",
                "급여조건": "월급\n(면접 시 협의)",
                "근무지역": "대구 동구",
                "직급": "사원급",
                "직책": "팀원"
            },
            "제출": {
                "접수기간": "2023.05.19 ~ (채용 시 마감)",
                "접수방법": "장애인채용포털 접수",
                "접수 이메일": "",
                "제출 서류": "이력서"
            },
            "근무환경": {
                "근무지역": "대구 동구",
                "근무요일": "주5일",
                "근무시간": "탄력근무제",
                "복리후생": "4대보험, 퇴직금, 중식, 회식, 장기 근무자 포상",
                "장애인편의시설": ""
            },
            "담당자": {
                "담당자": "권현구",
                "전화번호": "010-4539-3142",
                "이메일": "@"
            }
        }
    ])
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
                    <button className={`left-button ${view === "available" ? "selected" : ""}`} onClick={handleClickAvailable}>신청 예정</button>
                    <button className={`right-button ${view === "completed" ? "selected" : ""}`} onClick={handleClickCompleted}>신청 완료</button>
                </div>
                {view === "available" ? (
                    <div>
                        <h1>혜택</h1>
                        {benefit.length > 0 ? (
                            benefit.map(item => (
                                <Card style={{ width: '100%', textAlign: 'center', fontFamily: 'Pretendard-Regular' }} key={item.id}>
                                    <Card.Body>
                                        <Card.Title>{item.service}</Card.Title>
                                        <Card.Text>{item.content}</Card.Text>
                                        <Button variant="primary" onClick={() => handleShowBenefit(item)}>
                                            자세히 보기
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <div>
                                <h1>혜택</h1>
                                가능한 혜택이 없습니다.
                            </div>
                        )}
                        <h1>일자리</h1>
                        {jobs.length > 0 ? (
                            jobs.map(job => (
                                <Card style={{ width: '100%', textAlign: 'center', fontFamily: 'Pretendard-Regular' }} key={job.id}>
                                    <Card.Body>
                                        <Card.Title>{job.hire_title}</Card.Title>
                                        <Card.Text>{job.근무환경.근무지역}</Card.Text>
                                        <Button variant="primary" onClick={() => handleShowJob(job)}>
                                            자세히 보기
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <div>
                                <h1>일자리</h1>
                                내역 없음.
                            </div>
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
                <Modal style={{fontFamily:'Pretendard-Regular'}} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalInfo.service || modalInfo.hire_title}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            {
                                modalType === "benefit" ?
                                (<>
                                    <p>{modalInfo.content}</p>
                                    <p>대상: {modalInfo.target}</p>
                                    <p>방법: {modalInfo.how}</p>
                                </>) :
                                modalInfo.근무환경 ?
                                (<>
                                    <p>근무지역: {modalInfo.근무환경.근무지역}</p>
                                    <p>근무요일: {modalInfo.근무환경.근무요일}</p>
                                    <p>근무시간: {modalInfo.근무환경.근무시간}</p>
                                    <p>복리후생: {modalInfo.근무환경.복리후생}</p>
                                    <p>접수방법: {modalInfo.제출.접수방법}</p>
                                    <p>담당자: {modalInfo.담당자.담당자}</p>
                                </>) :
                                (<p>일자리 정보가 없습니다.</p>)
                            }
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal> 
            </div>
        </div>
    )
}

export default MyInfo;
