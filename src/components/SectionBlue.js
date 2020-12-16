import React from "react";
import PropTypes from "prop-types";

const SectionBlue = ({ children }) => {
  return <section className="bg-blue-700 text-gray-100">{children}</section>;
};

SectionBlue.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBlue;
