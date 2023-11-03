//Using a Native node module
const fs = require("fs");

//Creating and writing to a new file
fs.writeFile("message.txt", "Hello from native modules", (err) => {
  if (err) throw err;
  else console.log("Data written to file");
});

//Reading from the file
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  else console.log(data);
});
