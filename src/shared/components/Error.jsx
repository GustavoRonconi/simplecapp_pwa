import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (<p className="form__form-group-error">{error}</p>);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
