import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostList from '../components/board/PostList';

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 번째 게시글',
      content: '첫 번째 게시글 내용입니다.'
    },
    {
      id: 2,
      title: '두 번째 게시글',
      content: '두 번째 게시글 내용입니다.'
    },
    {
      id: 3,
      title: '세 번째 게시글',
      content: '세 번째 게시글 내용입니다.'
    },
    {
      id: 4,
      title: '네 번째 게시글',
      content: '네 번째 게시글 내용입니다.'
    },
    {
      id: 5,
      title: '다섯 번째 게시글',
      content: '다섯 번째 게시글 내용입니다.'
    }
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h1>Welcome to Board</h1>
      <Link to="/signup">회원가입</Link>
      <PostList posts={posts}/>
    </div>
  );
};

export default MainPage;
