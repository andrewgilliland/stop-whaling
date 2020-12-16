import React from "react";
import PropTypes from "prop-types";

const H2 = ({ children }) => {
  return (
    <h2 className="text-4xl font-semibold uppercase tracking-wider">
      {children}
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
