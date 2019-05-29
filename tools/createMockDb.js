/* eslint-disable no-console */
const fs = require("fs");
const faker = require("faker"); // use faker to generate fake data for the log file.

// different log serverities can be set they will be chose at random when generating the mock data
const sevArray = ["ERROR", "WARNING", "INFO"];

function generateMockData(entries = 100) {
  let fakeLog = [];
  for (var i = 1; i <= entries; i++) {
    let item = sevArray[Math.floor(Math.random() * sevArray.length)];
    // push all log entries into an array
    fakeLog.push({
      date: faker.date.past(),
      severity: item,
      message: faker.hacker.phrase()
    });
  }
  // return log object which will populate the JSON db
  return { log: fakeLog };
}

// writes a JSON file to the disk
function writeLogToDisk(fakeLog, filename) {
  fileWritten = false;
  fs.writeFile(filename, JSON.stringify(fakeLog, null, "\t"), function(err) {
    if (err) {
      console.log("error writing file");
    }
  });
}
module.exports = { generateMockData, writeLogToDisk };
