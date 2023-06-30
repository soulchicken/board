import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './NewPostBtn.module.css'

const NewPostBtn = () => {
  const navigate = useNavigate();
  
  return (
    <button className={styles.button} onClick={() => navigate('/posts/new')}>
      글쓰기
    </button>
  );
}

export default NewPostBtn;