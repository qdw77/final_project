import React from 'react';
import '../css/Header_CSS.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

// 이미지 import
import introImage from '../../../assets/intro.png';
import iconintro from '../../../assets/icon1.png'
import icon1Regular from '../../../assets/Icon.png';
import vector2 from '../../../assets/Vector-2.png';
import vector1 from '../../../assets/Vector-1.png';
import vector from '../../../assets/Vector.png';
import menu from '../../../assets/menu.png';
import vectorMenu from '../../../assets/Vector2.png';

const Header = () => {
  const navigate = useNavigate(); 
  const location = useLocation();

  const isInfoPage = location.pathname === '/info';
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="logo">
        <img src={iconintro} alt="logo" />
        <img src={introImage} alt="intro text" />
      </div>
      <div className="icons">
        <button id="Icon1_white">
          <img src={icon1Regular} alt="icon1" />
        </button>
        <button onClick={() => navigate('/info')}>
          <img src={vector2} alt="vector2" />
        </button>
        <button>
          <img src={vector1} alt="vector1" />
        </button>
        <button>
          <img src={vector} alt="vector" />
        </button>
        <div className="menu-group">
          <div><img src={menu} alt="menu" /></div>
          <div><img src={vectorMenu} alt="menu vector" /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
