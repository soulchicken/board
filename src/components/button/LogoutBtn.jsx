import React from 'react'
import axios from 'axios';
import styles from './LogoutBtn.module.css'

const LogoutButton = ({ setIsLogin }) => {

  const handleLogout = async () => {
    const response = await axios.post('/api/users/logout');
    setIsLogin(response.data.isLogin !== "False");
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      로그아웃
    </button>
  );
}

export default LogoutButton