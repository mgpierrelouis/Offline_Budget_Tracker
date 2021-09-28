const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const uri = process.env.MONGODB_URI


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.use(express.static("public"));

// connect to Mongo database with Mongoose
mongoose.connect(uri|| 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);


// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const compression = require("compression");

// const PORT = proces.ENV.Port || 3000;

// const app = express();

// app.use(logger("dev"));

// const uri = "mongodb+srv://mgpierrelouis:Gwochef_11@offlinebudgettracker.yda4t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// app.use(compression());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(uri|| "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


// app.use(require("./routes/api.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

