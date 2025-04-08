import React, { useRef } from 'react'; // React 선언 , useRef로 타겟지정
import { useNavigate } from 'react-router-dom'; // 페이지 이동 함수
import Header from '../components/common/layouts/Header.jsx'; // 상단바
import '../components/common/css/HomePage_CSS.css'; // css
import green_intro from '../assets/intro_green.png';
import carbon_intro from '../assets/carbon_intro.png';
import new_energy from '../assets/new_energy.png';
import solar_power from '../assets/solar_power.png';


const HomePage = () => {
  const section2Ref = useRef(null); 
  const section3Ref = useRef(null); 
  const navigate = useNavigate(); 

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="intro-container">
      {/* 상단바 */}
      <Header />

      {/* Section 1 탄소 중립*/}
      <section className="section" id="section1"> 
          <img
            src={green_intro}
            alt="배경 상단 이미지"
            className="top-overlay"
          />

          <img
            src={carbon_intro}
            alt="탄소중립 소개"
            className="intro-image clickable"
            onClick={() => scrollTo(section2Ref)}
          /> {/* 이미지 클릭시 다음으로 넘어감 */}
      </section>
      {/* Section 2 신재생 에너지 소개*/}
      <section className="section" ref={section2Ref}>
        <img
          src={new_energy}
          alt="신재생 에너지"
          className="fullscreen-img clickable"
          onClick={() => scrollTo(section3Ref)}
        />
      </section>

      {/* Section 3 태양광 에너지 */}
      <section className="section" ref={section3Ref}>
        <img
          src={solar_power}
          alt="태양광 관련"
          className="fullscreen-img"
        />
        <div className="button-group">
          <button className="custom-btn" onClick={() => navigate('/info')}>
            더 알아보기 →
          </button>
          <button className="custom-btn" onClick={() => navigate('/simulate')}>
            시뮬레이션 체험하기 →
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
