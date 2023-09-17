// Load environment variables
require('dotenv').config();
// Load dependancies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const homeRouter = require('./routes/home_router');
const taskRouter = require('./routes/tasks_router');


const dburi = 'mongodb+srv://ahmednagy:test123@cluster0.jnhdmvn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to the database');
        app.listen(port, () => {
            console.log(`Server running on localhost:${port}`)
        })
    })
    .catch((err) => { console.log(err) });
app.set('view engine', 'ejs');
app.use('/public', express.static('./public'))
app.set("views", "views")
app.use(homeRouter);
app.use('/tasks', taskRouter);

app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})
// Running server
