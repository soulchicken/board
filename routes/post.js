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

// 게시글 삭제
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    // 세션에서 유저 정보 확인
    const { userId } = req.session;
    if (!userId) {
        res.status(401).json({ error: 'User not authenticated' });
        return;
    }

    const post = await Post.findByPk(id);
    if (!post) {
    res.status(404).json({ error: 'Post not found' });
    return;
    }

    // 게시글 작성자와 세션의 유저가 일치하는지 확인
    if (post.userId !== userId) {
        res.status(403).json({ error: 'User not authorized' });
        return;
    }

    // 진짜로 DB에서 게시글 삭제
    post.destroy()
        .then(() => {
        res.status(204).json({ message: 'Post deleted successfully' });
        })
        .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        });
});


module.exports = router;