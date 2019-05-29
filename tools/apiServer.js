/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const fs = require("fs");
const filename = path.join(__dirname, "data.json");

//const router = jsonServer.router(filename);
console.log(__dirname);
//const router = jsonServer.router(path.join("/", "data.json"));
const { generateMockData, writeLogToDisk } = require("./createMockDb");

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 1000);
});

server.get("/buildLog", (req, res, next) => {
  const entries = req.query.hasOwnProperty("en") ? req.query.en : 100;
  const mockData = generateMockData(entries);
  writeLogToDisk(mockData, filename);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("success");
  res.end();
  next();
});

server.get("/log", (req, res, next) => {
  fs.readFile(filename, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
    next();
  });
});

// Declaring custom routes below.
// Use default router
//server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}
