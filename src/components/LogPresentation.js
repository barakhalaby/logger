import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { DateTime } from "./DateTime";

// log Headers displaying the headings for the log data
export const LogHeader = () => (
  <div className="flexContainer">
    <div className="flexItem bold">Date/Time</div>
    <div className="flexItem bold">Severity</div>
    <div className="flexItem bold">Message</div>
  </div>
);

// log content is loaded and displayed using flex box layout
export const LogContent = props => (
  <div className={`flexContainer ${props.severity}`}>
    <div className="flexItem">
      <DateTime {...props} />
    </div>
    <div className="flexItem">{props.severity}</div>
    <div className="flexItem">{props.message}</div>
  </div>
);

LogContent.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired
};
