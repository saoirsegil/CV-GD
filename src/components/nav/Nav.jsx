import React, { useState } from 'react';
import './Nav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookFill } from 'react-icons/bs';
import { RiServiceFill } from 'react-icons/ri';
import { AiFillContacts } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsFillBookFill />
      </a>
      <a
        href="#service"
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#service' ? 'active' : ''}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiFillContacts />
      </a>
    </nav>
  );
};

export default Nav;
