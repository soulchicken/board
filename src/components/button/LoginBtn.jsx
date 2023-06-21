import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './LoginBtn.module.css'

const LoginButton = () => {
  const navigate = useNavigate();
  
  return (
    <button className={styles.button} onClick={() => navigate('/login')}>
      로그인
    </button>
  );
}

export default LoginButton