const path = require("path");

module.exports = function (app) {
  app.get("/createaccount", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/createAccount.html"));
  });
};
