const express = require('express');
const router = express.Router();
const Task = require('../models/tasks')

module.exports = router;

router.use(express.urlencoded({ extended: true }));



router.get('/', (req, res) => {
    Task.find()
        .then((result => {
            res.render('tasks', { title: "tasks", tasks: result });
        }))
        .catch((err) => { console.log(err) });

});

router.post('/', (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then((result) => {
            console.log('task saved');
            res.redirect('/tasks');
        })
})

router.get('/create', (req, res) => {
    res.render('task_create', { title: "create Task" })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .then(result => {
            res.render('task_details', { title: 'task Details', task: result })
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/tasks' })
        })
        .catch((err) => { console.log(err) })
});

router.get('/update/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .then(result => {
            res.render('task_update', { title: 'task Update', task: result })
        })
});

router.post('/update/:id', (req, res) => {
    const sentTask = req.body;
    const done = sentTask.done == "yes" ? true : false
    sentTask.done = done;
    const id = req.params.id;
    Task.findByIdAndUpdate(id, sentTask)
        .then((result) => {
            res.redirect(`/tasks/${id}`)
        })
        .catch((err) => { console.log(err) })
});