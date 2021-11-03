import React from 'react';
import PropTypes from 'prop-types';

const NewsCart = ({ title, text }) => {
  return (
    <div className="jumbotron">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
NewsCart.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCart;
