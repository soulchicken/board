import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/board/PostList';
import LogoutButton from '../components/button/LogoutBtn';
import SignupButton from '../components/button/SignupBtn';
import LoginButton from '../components/button/LoginBtn';
import NewPostBtn from '../components/button/NewPostBtn';

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 번째 게시글',
      content: '첫 번째 게시글 내용입니다.'
    },
    {
      id: 2,
      title: '두 번째 게시글',
      content: '두 번째 게시글 내용입니다.'
    },
    {
      id: 3,
      title: '세 번째 게시글',
      content: '세 번째 게시글 내용입니다.'
    },
    {
      id: 4,
      title: '네 번째 게시글',
      content: '네 번째 게시글 내용입니다.'
    },
    {
      id: 5,
      title: '다섯 번째 게시글',
      content: '다섯 번째 게시글 내용입니다.'
    }
  ]);

  useEffect(() => {
    fetchPosts();
    authCheck();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const authCheck = async () => {
    try {
      const response = await axios.get('/api/users/authcheck');
      setIsLogin(response.data.isLogin === "True");
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h1>Welcome to Board</h1>
      {
        isLogin
        ? <>
            <NewPostBtn />
            <LogoutButton setIsLogin={setIsLogin}/>
          </>
        : <>
            <SignupButton />
            <LoginButton />
          </>
      }
      <PostList posts={posts}/>
    </div>
  );
};

export default MainPage;
