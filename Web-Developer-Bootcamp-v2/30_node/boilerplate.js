// example script execution with node: node boilerplate.js portfolio

const fs = require("fs");

const folderName = process.argv[2] || "Project";

// // async version
// fs.mkdir(folderName, { recursive: true }, (err) => {
//   if (err) throw err;
// });
console.log(folderName);
// synchronous version
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.js`);
  fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
  console.log("Something went wrong!");
  console.log(e);
}
