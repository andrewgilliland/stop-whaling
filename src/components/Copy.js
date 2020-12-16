import React from "react";
import PropTypes from "prop-types";

const Copy = ({ children }) => {
  return (
    <p className="mt-5 text-lg leading-relaxed">
      {children}
    </p>
  );
};

Copy.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Copy;
