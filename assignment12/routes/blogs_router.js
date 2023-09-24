const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog_controller')
const Blog = require('../models/blogs')

module.exports = router;

router.use(express.urlencoded({ extended: true }));



router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/create', blogController.getCreateBlogForm);
router.get('/:id', blogController.getBlogById);
router.delete('/:id', blogController.deleteBlogById);
router.get('/update/:id', blogController.getUpdateBlogForm);
router.post('/update/:id', blogController.updateBlogById);
