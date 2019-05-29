import React from "react";
import { URI, getData, buildLogFile } from "../api/serverApi";
import { LogHeader, LogContent } from "./LogPresentation";
import Header from "./HeaderPresentation";
import types from "./types";
import Statistics from "./StatisticsPresentation";

export default class App extends React.Component {
  // declare initial state
  state = {
    log: [],
    errors: 0,
    warnings: 0,
    info: 0,
    logBuilds: 0
  };

  buildLog() {
    const rand = Math.floor(Math.random() * 1000 + 1);
    buildLogFile(rand).then(response => {
      if (response === "success") {
        this.updateLog();
      }
    });
  }

  updateLog() {
    // retrieve log data
    getData(URI).then(response => {
      // create temporary state object to store log and stats
      let state = { errors: 0, warnings: 0, info: 0 };

      state.log = response.log;
      response.log.forEach(element => {
        // increment statistics for each object in the log array
        switch (element.severity) {
          case types.ERROR:
            state.errors++;
            break;
          case types.WARNING:
            state.warnings++;
            break;
          case types.INFO:
            state.info++;
            break;
        }
      });

      this.setState(state);
    });
  }

  componentDidMount() {
    // when component mounts request the log file from the server.
    this.buildLog();
  }
  render() {
    const { log } = this.state;
    return (
      <>
        <Header style={{ fontSize: "25px" }} />
        {<br />}

        {log.length > 0 && (
          // when the length of the log is greater then 0 , display the content to the page
          <>
            <Statistics {...this.state} />
            {<br />}
            <LogHeader />
            {log.map((logItem, key) => (
              <LogContent key={key} {...logItem} />
            ))}
          </>
        )}

        {//if log length is 0 display a loading message.
        !this.state.log.length && <div>Loading Log data please wait...</div>}
      </>
    );
  }
}
