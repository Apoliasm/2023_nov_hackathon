import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import "./Common.css";
import "./MyInfo.css";
import Wrapper from './components/Wrapper';

function MyInfo() {
    const user_id = "01011112222"; 

    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const [modalType, setModalType] = useState(""); 

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
    /* test
    const [data, setData] = useState([
        {
            "hire": [
                {
                    "id": 2,
                    "hire_title": "에스앤에스 컴퍼니 직영 매장 토끼정 채용공고",
                    "qualified_apply": "경력무관",
                    "qualified_education": "학력무관",
                    "qualified_disabled": "장애인 우대채용\n심하지 않은 장애",
                    "qualified_advantage": "인근거주자",
                    "hire_type": "정규직",
                    "hire_contract": "",
                    "hire_pay": "월급\n(면접 시 협의)",
                    "hire_region": "대구 동구",
                    "hire_rank": "사원급",
                    "hire_role": "팀원",
                    "submit_period": "2023.05.19 ~ (채용 시 마감)",
                    "submit_type": "장애인채용포털 접수",
                    "submit_address": "",
                    "submit_portpolio": "이력서",
                    "work_region": "대구 동구",
                    "work_day": "주5일",
                    "work_period": "탄력근무제",
                    "work_benefits": "4대보험, 퇴직금, 중식, 회식, 장기 근무자 포상",
                    "work_facility": "",
                    "officer_name": "권현구",
                    "officer_tel": "010-4539-3142",
                    "officer_email": "@",
                    "user_id": [
                        "01011112222"
                    ]
                }
            ],
            "bene": [
                {
                    "id": 5,
                    "type": " 혜택, 복지, 지원금",
                    "service": " 통합공공임대",
                    "content": " 최저소득 계층, 저소득 서민, 젊은 층 및 장애인·국가유공자 등 사회 취약계층 등의 주거안정을 위해 공공임대주택을 공급합니다.",
                    "target": " 일반공급 대상자는 다음과 같습니다./- (청년) 18세∼39세 이하이며 혼인 중이 아닐 것, 중위소득 150%이하/- (신혼부부ㆍ한부모가족)혼인기간이 7년 이내인 사람, 예비신혼부부, 6세 이하 자녀를 둔 사람, 6세이하 자녀를 둔 한부모 가족, 중위소득 150%이하/- (고령자) 65세 이상, 중위소득 150%이하, 총자산 32,500만원 이하, 자동차 3,557만원 이하/- (일반) 무주택세대구성원, 중위소득 150%이하/우선공급 대상자는 다음과 같습니다./- (철거민 등) 공공주택건설사업, 주거환경개선 또는 재개발사업, 도시·군계획시설사업, 공공사업 중 GB해제 택지개발사업 또는 도시개발사업, 산업단지개발사업, 부도임대주택, 재해철거 주택, 중대하자 철거주택, GB해제지역 타인토지 주택, 중위소득 100%이하/- (국가유공자등) 국가유공자 또는 유족, 보훈보상대상자 또는 유족,5·18민주유공자 또는 유족, 특수임무유공자 또는 유족, 참전유공자 또는 유족, 중위소득 100%이하/- (장기복무제대군인, 북한이탈주민등) 장기복무제대군인, 북한이탈주민, 납북피해자, 중소기업근로자, 비정규직근로자, 성폭력피해자 또는 가족, 가정위탁아동보호자, 범죄피해자, 폐탄광근로자, 파독근로자, 영구임대주택 퇴거자, 소년·소녀가정, 해외장기거주 재외동포, 국군 등록포로, 가정폭력피해자, 중위소득 100%이하, 일본군위안부 피해자/- (다자녀가구 등) 2명 이상 미성년자녀 가구, 65세 이상 직계존속 부양자, 보호대상 한부모가족, 중위소득 100%이하/- (장애인) 장애인등록증 교부자, 중위소득 100%이하/- (비주택거주자등) 쪽방, 고시원, 여인숙, 비닐간이공작물, 노숙인시설, 컨테이너, 움막, PC·만화방, 침수피해 우려 반지하·지하층, 최저주거기준미달 미성년자녀 가구, 무허가건축물 등 세입자, 중위소득 100%이하/- (기초생활보장제도 급여수급자등) 생계·주거·의료급여 수급(권)자/- (청년) 혼인 중이 아닌 18세∼39세,아동복지시설 퇴소(예정)자, 청소년쉼터 퇴소(예정)자, 중위소득 100%이하/- (신혼부부ㆍ한부모가족) 혼인기간이 7년 이내인 사람, 예비신혼부부, 6세 이하 자녀를 둔 사람, 6세이하 자녀를 둔 한부모 가족, 중위소득 100%이하/- (고령자) 65세 이상, 중위소득 100%이하",
                    "how": " 공공주택사업자*별 입주자모집 공고에 따라 누리집 현장접수 등을 통해 청약을 신청합니다./* 한국토지주택공사, 서울주택도시공사, 경기도시공사 등/상세 모집계획, 임대료, 입주자격 등 보다 자세한 정보는 한국토지주택공사 청약센터(apply.lh.or.kr) 또는 마이홈포털(www.myhome.go.kr)을 참고하거나, 마이홈 전화상담실(1600-1004)에 문의할 수 있습니다.",
                    "user_id": [
                        "01011112222"
                    ]
                }
            ]
        }]);
        const [benefit, setBenefit] = useState(data[0].bene);
        const [jobs, setJobs] = useState(data[0].hire);
    */
    
    const [benefit, setBenefit] = useState([]);
    const [jobs, setJobs] = useState([]);
    
    
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/father/user', {
            user_id: user_id
        })
        .then(res => {
            const data = res.data;
            setBenefit(data.bene);
            setJobs(data.hire);
        })
        .catch(error => console.error('Error:', error));
    }, []);
    
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
        <Wrapper>
            <div>
                <div className="backdrop">
                    <div className="upper2">
                        <button className="upper2-button" onClick={handleBackClick}>←</button>
                        내 정보
                    </div>
                    <div className="button-container">
                        <button className={`left-button ${view === "available" ? "selected" : ""}`} onClick={handleClickAvailable}>혜택</button>
                        <button className={`right-button ${view === "completed" ? "selected" : ""}`} onClick={handleClickCompleted}>일자리</button>
                    </div>
                    {view === "available" ? (
                        <div style={{ paddingBottom: "5px" }}>
                        {benefit.length > 0 ? (
                            benefit.map(item => (
                                <Card className="text-center" style={{ marginBottom: '20px' }} key={item.id}>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.service}</Card.Title>
                                        <Card.Text style={{ fontSize: '14px' }}>{item.content}</Card.Text>
                                        <Button className="custom-button" onClick={() => handleShowBenefit(item)}>
                                            자세히 보기
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <Card style={{ width: '100%', textAlign: 'center', fontFamily: 'Pretendard-Regular' }}>
                                    <Card.Body>
                                        <Card.Title> 혜택 </Card.Title>
                                        <Card.Text>혜택이 없습니다.</Card.Text>
                                    </Card.Body>
                            </Card>
                        )}
                        </div>
                    ) : (
                        <div style={{ paddingBottom: "5px" }}>
                            {jobs.length > 0 ? (
                                jobs.map(job => (
                                    <Card className="text-center" style={{ marginBottom: '20px' }} key={job.id}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>{job.hire_title}</Card.Title>
                                            <Card.Text style={{ fontSize: '14px' }}>{job.hire_region}</Card.Text>
                                            <Button className="custom-button" onClick={() => handleShowJob(job)}>
                                                자세히 보기
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                ))
                            ) : (
                                <Card style={{ width: '100%', textAlign: 'center', fontFamily: 'Pretendard-Regular' }}>
                                        <Card.Body>
                                            <Card.Title> 일자리 </Card.Title>
                                            <Card.Text>가능한 일자리 내역이 없습니다.</Card.Text>
                                        </Card.Body>
                                </Card>
                            )}
                        </div>
                    )}
                    <Modal style={{fontFamily:'Pretendard-Regular'}} show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{ fontSize: '23px', fontWeight: 'bold' }}>{modalInfo.service || modalInfo.hire_title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                modalType === "benefit" ?
                                (<>
                                    <p>{modalInfo.content}</p>
                                    <div style={{ marginBottom: '5px' }}><b>대상</b>: {modalInfo.target}<br/></div>
                                    <div style={{ marginBottom: '5px' }}><b>방법</b>: {modalInfo.how}<br/></div>
                                </>) :
                                (<>
                                    <div style={{ marginBottom: '5px' }}><b>근무지역</b>: {modalInfo.hire_region}<br/></div>
                                    <div style={{ marginBottom: '5px' }}><b>근무요일</b>: {modalInfo.work_day}<br/></div>
                                    <div style={{ marginBottom: '5px' }}><b>복리후생</b>: {modalInfo.work_benefits}<br/></div>
                                    <div style={{ marginBottom: '5px' }}><b>접수방법</b>: {modalInfo.submit_type}<br/></div>
                                    <div style={{ marginBottom: '5px' }}><b>담당자</b>: {modalInfo.officer_name}<br/></div>
                                </>)
                            }
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: 'center' }}>
                            <Button className="custom-button" onClick={handleClose}>
                                닫기
                            </Button>
                        </Modal.Footer>
                    </Modal> 
                </div>
            </div>
        </Wrapper>
    )
}

export default MyInfo;
