const express = require('express');
const mongoose = require('mongoose');
const Account = require("./models/accounts");

const app = express();
const port = process.env.PORT || 3000;

//Connect to MongoDb
const dbURI =
  "mongodb+srv://Connect-user:Soccer12@large-project.ugnwv.mongodb.net/large-project?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(port))
.catch((err) => console.log(err));

//Mongoose Routes
app.get('/add-account', (req, res) => {
  const addAccount = new Account({
    userName: 'test1',
    password: '1234',
    email: 'test1@test1.com'
  });

  addAccount.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/login.js")(app);
require("./routes/createAccount.js")(app);

console.log("App is listening on port: " + port);
