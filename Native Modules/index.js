//Using a Native node module
const fs = require("fs");

fs.writeFile("message.txt", "Hello from native modules", (err) => {
  if (err) throw err;
  else console.log("Data written to file");
});
