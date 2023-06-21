// PostList.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 Link 컴포넌트 import
import styles from './PostList.module.css'; // CSS 모듈 가져오기
import PostTitle from './PostTitle';

const PostList = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.postList}> {/* CSS 모듈 클래스명 적용 */}
      <h2>게시판 전체보기</h2>
      <ul>
        {posts.map((post) => <PostTitle post={post} navigate={navigate}/>)}
      </ul>
    </div>
  );
};

export default PostList;
