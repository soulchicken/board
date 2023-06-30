import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      alert(error.response.data.isLogin);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <input
        className={styles.input}
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit">로그인</button>
      <div class={styles.division}></div>
      <button className={styles.button} onClick={()=>navigate('/signup')}>회원가입</button>
    </form>
  );
};

export default LoginForm;