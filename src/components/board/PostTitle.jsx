import React from 'react'
import styles from './PostTitle.module.css'; // CSS 모듈 가져오기

const PostTitle = ({ post, navigate }) => {

    return (
        <li className={styles.postTitle} key={post.id} onClick={() => {
            navigate(`/posts/${post.id}`)
            }}>
              <h3>{post.title}</h3>
        </li>
    );
}

export default PostTitle