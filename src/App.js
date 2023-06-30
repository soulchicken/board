import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostDetail from './pages/PostDetail';
import NewPostPage from './pages/NewPostPage';

function App() {
  return (
    <div className={styles.container}>
    <Router>
      <Routes>
        {/* 다른 경로에 대한 라우트 설정 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
  </Router>
  </div>
  );
}

export default App;
