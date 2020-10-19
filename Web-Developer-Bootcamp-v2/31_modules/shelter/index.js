// index.js works as an entry point in node - whatever index.js exports is what the module will export

const blue = require("./blue");
const janet = require("./janet");
const sadie = require("./sadie");

const allCats = [blue, janet, sadie];

module.exports = allCats;
