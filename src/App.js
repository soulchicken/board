import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className={styles.container}>
    <Router>
      <Routes>
        {/* 다른 경로에 대한 라우트 설정 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
  </Router>
  </div>
  );
}

export default App;
