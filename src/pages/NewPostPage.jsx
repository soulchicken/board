import React, { useState } from 'react';
import styles from './NewPostPage.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      alert('Title and content are required');
      return;
    }

    const response = await axios.post('/api/posts', {
        title, content
    });
    if (response.status === 200){
        alert('게시글 작성 성공!');
        navigate(`/posts/${response.data.id}`);
    } else {
        alert('게시글 작성 실패!');
    }
    
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>게시글 작성</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>제목</label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>내용</label>
          <textarea
            id="content"
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>작성</button>
      </form>
    </div>
  );
};

export default NewPostPage;
