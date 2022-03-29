import React from 'react';
import './About.css';
import ME from '../../assets/About-Me.jpg';
import { GiClockwork } from 'react-icons/gi';
import { ImUsers } from 'react-icons/im';
import { MdDesignServices } from 'react-icons/md';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiClockwork className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <MdDesignServices className="about__icon" />
              <h5>Designs</h5>
              <small>300+ Completed</small>
            </article>
          </div>
          <p>
            Equipped with the ability to escalate brand awareness by utilizing
            skills gained in the creative industry, being able to identify
            opportunities, overcome objections, build long-term mutually
            beneficial relationships with vendors, workforce, and clients,
            establishing a successful and lucrative business.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
