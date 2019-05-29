// presentation component Displays the Header on the page
// style property is passed in to show a a style can be applied to the Header from the component entry point

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const HeaderPresentation = ({ style }) => (
  <div className="header" style={style}>
    Log App
  </div>
);

export default HeaderPresentation;

HeaderPresentation.propTypes = {
  style: PropTypes.object.isRequired
};
