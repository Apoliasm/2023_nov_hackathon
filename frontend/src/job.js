// Job.js
import React from 'react';
import PropTypes from 'prop-types';

function Job({ title, description }) {
  return (
    <div>
      <p>{title}</p>
      {/* <p>{description}</p> */}
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Job;
