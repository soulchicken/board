import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SignupBtn.module.css'

const SignupButton = () => {
  const navigate = useNavigate();
  
  return (
    <button className={styles.button} onClick={() => navigate('/signup')}>
      회원가입
    </button>
  );
}

export default SignupButton;