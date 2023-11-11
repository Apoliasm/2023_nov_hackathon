// Jobs.js
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Common.css";
import SearchBar from './SearchBar';
import Job from './job.js';

function Jobs() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([
    { title: '풋락커코리아 매장 장애인 아르바이트 채용 (전지점 채용중)', description: 'Develop and maintain software' },
    { title: '에스앤에스 컴퍼니 직영 매장 토끼정 채용공고', description: 'Develop and maintain software' },
    { title: '[장애인/주3일] 백화점 매장 조리 및 판매서비스 장애인 직원 모집', description: 'Develop and maintain software' }
  ]);

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredJobs = search.trim() === "" ? [] : jobs.filter((job) => {
    return job.title.replace(" ","").includes(search.toLocaleLowerCase().replace(" ",""))
  });

  return (
    <div>
      <div className="backdrop">
        <div className="upper2">
          <button className="upper2-button" onClick={handleBackClick}>←</button>
          일자리
        </div>

        <SearchBar search={search} onChange={onChange} />

        <div>
          {filteredJobs.map((job, index) => 
            <Job key={index} title={job.title} description={job.description} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Jobs;
