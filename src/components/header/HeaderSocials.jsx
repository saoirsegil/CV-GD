import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillBehanceSquare } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.facebook.com/jdesignsolutions"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/jayson-diaz-272729186/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.behance.net/jdesignsolutions"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillBehanceSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
