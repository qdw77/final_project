import React from 'react';
import '../components/common/css/ResultPage_CSS.css';

const ResultPage = () => {
  return (
    <div className="result-page-wrapper">

      <div className="top-section">
        <div className="result-map-placeholder">지도 시뮬레이션 결과</div>

        <div className="simulation-info">
          <div className="result-stats">
            <h3>시뮬레이션 결과</h3>
            <p>설치 개수: n개</p>
            <p>설치 면적: n m²</p>
            <p>예상 발전량: nnn MWh</p>
          </div>
          <div className="donut-chart-placeholder">도넛 차트</div>
        </div>
      </div>

      {/* 탄소 저감 카드 & 차트 */}
      <section className="carbon-section">
        <div className="carbon-title">탄소를 N만큼 저감했어요!</div>
        <div className="carbon-layout">
          <div className="carbon-cards">
            <div className="carbon-card">석유 사용 시 +150000(gCO₂/kWh)</div>
            <div className="carbon-card">석탄 사용 시 +120000(gCO₂/kWh)</div>
            <div className="carbon-card">천연가스 사용 시 +80000(gCO₂/kWh)</div>
            <div className="carbon-card">바이오매스 사용 시 +150000(gCO₂/kWh)</div>
          </div>
          <div className="carbon-card highlight large">태양광 +500(gCO₂/kWh)</div>
        </div>
        <div className="carbon-chart-placeholder">에너지원 별 탄소배출량 비교 그래프</div>
      </section>

      {/* 미래 예측 절감량 */}
      <section className="future-section">
        <h2>앞으로 n만큼 더 절약할 수 있어요!</h2>
        <div className="line-chart-placeholder">기간별 예측 누적 탄소 저감량 그래프 공간</div>
      </section>

      {/* 나무 효과 - 텍스트 + 이미지 */}
      <section className="tree-section">
        <div className="tree-text">
          <h2>나무를 N개 심은 것과 비슷한 효과에요!</h2>
          <div className="tree-effect">
            <p>🌱 실제 나무 N그루를 심는다면?</p>
            <p>⚡ 근데 태양광은?</p>
          </div>
        </div>
        <div className="tree-image" />
      </section>
    </div>
  );
};

export default ResultPage;
