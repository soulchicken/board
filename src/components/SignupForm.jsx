import axios from 'axios';
import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== password2){
      return alert("비밀번호가 일치하지 않습니다");
    }

    try {
      const response = await axios.post('/api/users/', {
        email,
        username,
        password,
      });

      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      alert(error.response.data);

    }    
  }

  return (
    <form className={styles.form} onSubmit={handleSignup}>
    <input
            className={styles.input}
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="닉네임"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="비밀번호 확인"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button className={styles.button} type="submit">회원가입</button>

          <div class={styles.division}></div>
    <button className={styles.button} onClick={() => navigate('/login')}>로그인</button>
    </form>
)}

export default SignupForm;