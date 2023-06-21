import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './HomeBtn.module.css'

const HomeBtn = () => {
  const navigate = useNavigate();
  
  return (
    <button className={styles.button} onClick={() => navigate('/')}>
      Home
    </button>
  );
}

export default HomeBtn;