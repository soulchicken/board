import React from 'react';
import HomeBtn from '../components/button/HomeBtn';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <SignupForm />
      <HomeBtn />
    </div>
  );
};

export default SignupPage;