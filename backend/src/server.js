const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require('./routes')

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-tjl7o.mongodb.net/test?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json())
//Arquivos estaticos serem enviados
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));

app.use(routes)
app.listen(3333)