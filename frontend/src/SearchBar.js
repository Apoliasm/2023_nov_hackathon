import * as React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import searchImg from './image/search.png';
import "./SearchBar.css";

function SearchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded"
          placeholder="원하는 지역을 입력하세요!"
          onChange={onChange}
        />
        <img className="searchImg" src={searchImg} onClick={onClick}></img>
      </div>
    </>
  );
}

export default SearchBar