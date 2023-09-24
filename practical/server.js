require('dotenv').config();

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = process.env.PORT;


const dburi = 'mongodb+srv://ahmednagy:test123@cluster0.jnhdmvn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((resut) => {
        console.log('Connected to the data base')
        app.listen(port, () => {
            console.log(`Server running on localhost:${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
app.set('view engine', 'ejs');
app.use('/public', express.static('./public'))





app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})