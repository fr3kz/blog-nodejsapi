const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mognoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const postRouters = require('./routers/postRouters');

const MONGO_URI = "mongodb://fr3kz:BIko0230@ds125125.mlab.com:25125/blog";
mognoose.connect(MONGO_URI, {useNewUrlParser: true}).then( () => console.log("db connected"))
.catch( err => console.log(err));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use("/", postRouters);

app.listen(8080);