const Blog = require('../models/blogs');

// Display all blogs
const getAllBlogs = (req, res) => {
    Blog.find()
        .then(result => {
            res.render('blogs', { title: 'blogs', blogs: result });
        })
        .catch(err => {
            console.log(err);
        });
};

// Create a new blog
const createBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog
        .save()
        .then(result => {
            console.log('blog saved');
            res.redirect('/blogs');
        });
};

// Display the create blog form
const getCreateBlogForm = (req, res) => {
    res.render('blogs_create', { title: 'create blogs' });
};

// Display a single blog by ID
const getBlogById = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blog_details', { title: 'blog Details', blog: result });
        });
};

// Delete a blog by ID
const deleteBlogById = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
};

// Display the update blog form
const getUpdateBlogForm = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blog_update', { title: 'blog Update', blog: result });
        });
};

// Update a blog by ID
const updateBlogById = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body)
        .then(result => {
            res.redirect(`/blogs/${id}`);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    getAllBlogs,
    createBlog,
    getCreateBlogForm,
    getBlogById,
    deleteBlogById,
    getUpdateBlogForm,
    updateBlogById
};
