require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const port = process.env.PORT;

const app = express();

app.use(express.json());

const dburi = 'mongodb+srv://ahmednagy:test123@cluster0.jnhdmvn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("conneted to the database");
        app.listen(port, () => {
            console.log(`Server running on localhost:${port}`)
        })
    })
    .catch((err) => { console.log(err) });

app.use(authRoutes);

