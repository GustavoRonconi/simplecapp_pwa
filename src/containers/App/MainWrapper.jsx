import React from 'react';
import PropTypes from 'prop-types';

const MainWrapper = ({ children }) => (
  <div className="theme-dark">
    <div className="wrapper">
      {children}
    </div>
  </div>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;

