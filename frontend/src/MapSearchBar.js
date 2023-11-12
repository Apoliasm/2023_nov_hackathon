import * as React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
function MapSearchBar({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="찾고 싶으신 복지관 이름을 입력하세요!"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </>
  );
}

export default MapSearchBar