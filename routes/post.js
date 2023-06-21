const express = require('express');
const Post = require('../models/post');

const router = express.Router();

// 게시글 작성
router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ error: 'Title and content are required' });
        return;
    }
    
    if (!req.session.isLogin) {
        res.status(401).json({ error: 'User not authenticated' });
        return;
    }

    // 이제 진짜 데이터베이스에 게시글 작성
    Post.create({ title, content, userId: req.session.userId})
        .then((post) => {
            res.json(post);
        })
        .catch((error) => {
            console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;