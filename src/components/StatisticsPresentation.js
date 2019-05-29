import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

// statistics presentation component displays the statistics for the number of items in the log file.
const StatisticsPresentation = ({ errors, warnings, info }) => (
  <>
    <div style={{ fontWeight: "bold" }}>Statistics</div>
    <div className="flexStatsContainer">
      <div className="flexItem">{`Errors: ${errors}`}</div>
      <div className="flexItem">{`Warnings: ${warnings}`}</div>
      <div className="flexItem">{`Info: ${info}`}</div>
    </div>
  </>
);

export default StatisticsPresentation;

StatisticsPresentation.propTypes = {
  errors: PropTypes.number.isRequired,
  warnings: PropTypes.number.isRequired,
  info: PropTypes.number.isRequired
};
