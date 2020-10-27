const langs = require("langs");
const franc = require("franc");

const text = process.argv[2];
const isoCode = franc(text);

if (isoCode === "und") {
  console.log("Sorry, couldn't figure it out! Try with different sample text.");
} else {
  const language = langs.where("3", isoCode).name;
  console.log(`Our best guess is: ${language}`);
}
