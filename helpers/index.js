let obj = {};
require("fs")
  .readdirSync(require("path").join(__dirname))
  .forEach(function (file) {
    if (file != "index.js") {
      obj[file.split(".js")[0]] = require(require("path").resolve(
        __dirname,
        `./${file}`
      ));
    }
  });
module.exports = obj;
