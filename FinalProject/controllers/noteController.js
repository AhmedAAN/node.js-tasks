const User = require('../models/User');
const Note = require('../models/Note');


module.exports.createNote_get = async (req, res) => {
    const userId = req.cookies.user_id;
    const user = await User.findById(userId);
    res.render('pages/noteCreate.ejs', { title: "Create Note", user: user.name })
}

module.exports.createNote_post = async (req, res) => {
    const { name, content } = req.body;
    const authorId = req.cookies.user_id;
    try {
        let note = new Note({ name: name, content: content, author: authorId });
        await note.save();

        res.status(201).json({ note: note._id });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports.notes_get = async (req, res) => {
    const userId = req.cookies.user_id;
    const user = await User.findById(userId);
    const notes = await Note.find({ author: userId });
    if (!user) {
        res.redirect("/login")
    }
    else {
        res.render('pages/notes.ejs', { title: "Your Notes", user: user.name, notes: notes })
    }
}

module.exports.oneNote_get = async (req, res) => {
    const id = req.params.id;
    const userId = req.cookies.user_id;
    const user = await User.findById(userId);
    const note = await Note.findById(id);
    const author = note.author;

    if (author != userId) {
        res.render('pages/404.ejs', { title: "404", user: user.name });
    }
    else {
        res.render('pages/oneNote.ejs', { title: "One Note", user: user.name, note: note })
    }
}

module.exports.oneNote_delete = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/notes' });
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports.updateNote_get = async (req, res) => {
    const id = req.params.id;
    const userId = req.cookies.user_id;
    const user = await User.findById(userId);
    const note = await Note.findById(id);
    const author = note.author;

    if (author != userId) {
        res.render('pages/404.ejs', { title: "404", user: user.name });
    }
    else {
        res.render('pages/noteUpdate.ejs', { title: "Note Update", user: user.name, note: note })
    }
};

module.exports.oneNote_update = (req, res) => {
    const id = req.params.id;
    Note.findByIdAndUpdate(id, req.body)
        .then(result => {
            res.redirect(`/notes/${id}`);
        })
        .catch(err => {
            console.log(err);
        });
};