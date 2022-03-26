import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__social">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <AiFillFacebook />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
