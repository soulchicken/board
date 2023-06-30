import React from 'react';
import HomeBtn from '../components/button/HomeBtn';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <h1>로그인</h1>
      <LoginForm />
      <HomeBtn />
    </div>
  );
};

export default LoginPage;