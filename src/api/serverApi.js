// server URL
export const URI = "http://localhost:3001";

// retrieve log data from server using fetch
export async function getData(URI) {
  try {
    const rand = Math.floor(Math.random() * 1000 + 1); // generate random number and append to query to avoid caching
    const response = await fetch(`${URI}/log?${rand}`);
    // once log data is loaded return JSON object to caller function
    return response.json();
  } catch (error) {
    console.log("fetch failed", error);
  }
}

// create a JSON log file to simulate a real database.
// $$entries : number of entries to be created in the log file
export async function buildLogFile(entries) {
  try {
    const res = await fetch(`${URI}/buildLog?en=${entries}`);
    console.log("Building logs....");
    return res.text();
  } catch (error) {
    console.log("fetch failed", error);
  }
}
