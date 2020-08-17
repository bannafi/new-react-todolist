import React from "react";
import PropTypes from "prop-types";

import Styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.frame}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
