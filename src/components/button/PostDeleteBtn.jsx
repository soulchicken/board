import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './PostDeleteBtn.module.css'

const PostDeleteBtn = ({ postId }) => {
  const navigate = useNavigate();

  const handlePostDelete = async () => {
    try {
        const response = await axios.delete(`/api/posts/${postId}`);
        if (response.status === 204) {
            alert('게시글 삭제 성공!');
            navigate('/');
        }
    } catch (error) {
        alert('게시글 작성 실패!');
    }
  };

  return (
    <button className={styles.button} onClick={handlePostDelete}>
      게시글 삭제
    </button>
  );
}

export default PostDeleteBtn