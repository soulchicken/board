
// Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostDeleteBtn from '../components/button/PostDeleteBtn';
import HomeBtn from '../components/button/HomeBtn';
import styles from './PostDetail.module.css'; // CSS 모듈 import

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
    <div className={styles.postDetail}>
      <h2>게시글</h2>
      <h3>TITLE : {post.title}</h3>
      <div className={styles.contentLabel}>CONTENT</div>
      <p className={styles.contentText}>{post.content}</p>
      <HomeBtn />
      <PostDeleteBtn postId={post.id}/>
    </div>
  );
};

export default PostDetail;
