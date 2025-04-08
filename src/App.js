// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 = 루트(/) 주소에서 보일 컴포넌트 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} /> {/* 라우팅 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;