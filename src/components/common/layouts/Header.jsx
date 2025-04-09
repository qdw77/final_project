import React from 'react';
import '../css/Header_CSS.css';

// 이미지 import (src/assets 경로 기준)
import icon from '../../../assets/Icon.png';
import icon1 from '../../../assets/icon1.png';
import intro from '../../../assets/intro.png';
import vector2 from '../../../assets/Vector-2.png';
import vector1 from '../../../assets/Vector-1.png';
import vector from '../../../assets/Vector.png';
import menu from '../../../assets/menu.png';
import vector2b from '../../../assets/Vector2.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={icon1} alt="logo" />
        <img src={intro} alt="intro text" />
      </div>
      <div className="icons">
        <button id="Icon1_white">
          <img src={icon} alt="icon1" />
        </button>
        <button>
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
          <div><img src={vector2b} alt="menu vector" /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
