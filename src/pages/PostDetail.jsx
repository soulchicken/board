
// Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  let { postId } = useParams();
 
  const [post, setPost] = useState({ id: 5,
    title: '다섯 번째 게시글',
    content: '다섯 번째 게시글 내용입니다.'});
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <h2>게시글</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
