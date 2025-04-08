// src/pages/InfoPage.jsx
import React from 'react';
import Header from '../components/common/layouts/Header.jsx'; // 기존 Header 재사용

const InfoPage = () => {
  return (
    <div className="info-container">
      <Header />
      <h1>탄소중립에 대해 더 알아보기</h1>
      <p>이곳에 자세한 정보나 설명을 추가하세요.</p>
    </div>
  );
};

export default InfoPage;
