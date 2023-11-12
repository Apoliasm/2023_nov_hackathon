// Job.js
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

function Job({ id, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <p>{title}</p>
      {/* <p>{description}</p> */}
    </div>
  );
}

Job.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Job;
