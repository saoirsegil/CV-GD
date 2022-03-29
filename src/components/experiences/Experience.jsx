import React from 'react';
import './Experience.css';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__microsoft">
          <h3>Microsoft Office Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> Word</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> Excel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> PowerPoint</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End for Microsoft */}
        <div className="experience__adobe">
          <h3>Adobe Suites Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> Photoshop</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> Illustrator</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> After Effects</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__detail-icon" />
              <div>
                <h4> Premier Pro</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
