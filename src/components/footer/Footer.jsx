import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#d" className="footer__logo">
        JDesign Solutions
      </a>

      <ul className="permalinks">
        <li>
          {' '}
          <a href="#home">Home</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#about">About</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#experience">Experience</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#service">Services</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#Portfolio">Portfolio</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#Testimonials">Testimonials</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#contact">Contact</a>{' '}
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/jdesignsolutions"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/jayson-diaz-272729186/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.behance.net/jdesignsolutions"
          target="_blank"
          rel="noreferrer"
        >
          <FaBehance />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JDESIGN SOLUTIONS. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
