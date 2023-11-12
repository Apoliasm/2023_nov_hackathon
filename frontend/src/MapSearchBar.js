import * as React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import searchImg from './image/search.png';
import "./SearchBar.css";


function MapSearchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="찾고 싶은 복지관을 입력하세요!"
          onChange={onChange}
        />
        <img className="searchImg" src={searchImg} onClick={onClick}></img>
      </div>
    </>
  );
}

export default MapSearchBar