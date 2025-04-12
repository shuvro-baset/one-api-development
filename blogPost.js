const express = require('express');
const Joi = require('joi');
const router = express.Router();

// In-memory storage
let blogPosts = [];
let currentId = 1;

// BlogPost class
class BlogPost {
    constructor(title, content, author) {
        this.id = currentId++;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date().toISOString();
    }
}

// Joi schema for validation
const blogPostSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        'string.base': 'Title must be a string.',
        'string.empty': 'Title is required.',
        'string.min': 'Title must be at least 3 characters long.',
        'any.required': 'Title is required.'
    }),
    content: Joi.string().min(10).required().messages({
        'string.base': 'Content must be a string.',
        'string.empty': 'Content is required.',
        'string.min': 'Content must be at least 10 characters long.',
        'any.required': 'Content is required.'
    }),
    author: Joi.string().required().messages({
        'string.base': 'Author must be a string.',
        'string.empty': 'Author is required.',
        'any.required': 'Author is required.'
    })
});

// POST /posts
router.post('/blog-post', (req, res) => {
    const { error, value } = blogPostSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { title, content, author } = value;

    const newPost = new BlogPost(title, content, author);
    blogPosts.push(newPost);

    res.status(201).json({
        message: 'Blog post created successfully',
        post: newPost
    });
});

// GET /posts - Get all blog posts
router.get('/blog-posts', (req, res) => {
    res.status(200).json(blogPosts);
});


// GET /posts/:id
router.get('/blog-posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: `Blog post with ID ${id} not found` });
    }

    res.status(200).json(post);
});

module.exports = router;