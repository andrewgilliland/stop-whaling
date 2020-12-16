import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-xl mx-auto px-6 py-20 md:py-16">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
