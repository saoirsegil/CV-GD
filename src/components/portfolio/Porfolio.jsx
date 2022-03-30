import React from 'react';
import './Portfolio.css';

import Birthday from '../../assets/Ultimate-Celebration.jpg';
import Gym from '../../assets/Strive-Poster.jpg';
import Menu from '../../assets/Small-Kitchen-Menu.jpg';
import Jelly from '../../assets/Small-Kitchen.jpg';
import Logo from '../../assets/Wellness-Coach.jpg';
import Trifold from '../../assets/Tri-fold.jpg';

const Porfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Birthday} alt="" />
          </div>
          <h3>Birthday Poster</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Birthday} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Gym} alt="" />
          </div>
          <h3>Service Poster</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Gym} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Jelly} alt="" />
          </div>
          <h3>Product Poster</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Jelly} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>Menu Board</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Menu} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Logo} alt="" />
          </div>
          <h3>Wellness Logo</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Logo} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Trifold} alt="" />
          </div>
          <h3>Tri Fold Brochure</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.behance.net/jdesignsolutions" className="btn">
              Behance
            </a>
            <a href={Trifold} download className="btn btn-primary">
              Download jpeg
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Porfolio;
