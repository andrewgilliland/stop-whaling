import React from "react";
import PropTypes from "prop-types";

const SectionDark = ({ children }) => {
  return (
    <section className="bg-black text-gray-100">
      {children}
    </section>
  );
};

SectionDark.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionDark;
