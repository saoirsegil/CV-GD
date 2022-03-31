import React from 'react';
import './Service.css';
import { GiCheckMark } from 'react-icons/gi';

const Service = () => {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Service</h2>

      <div className=" container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Reporting</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>You are able to use MS Word to edit text documents.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Automate the creation of tables of content.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Running and creating functions.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Pivot tables and charts.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Create templates.</p>
            </li>
          </ul>
        </article>
        {/* End of reporting */}
        <article className="service">
          <div className="service__head">
            <h3>Presentation</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Simplify and limit the number of words on each screen.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Use contrasting colors for text and background. Light text on a
                dark background is best.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Limit the number of slides. Presenters who constantly “flip” to
                the next slide are likely to lose their audience
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Use good-quality images that reinforce and complement your
                message.
              </p>
            </li>
          </ul>
        </article>
        {/* End of presention */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Art</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Brochures, rack cards & booklets.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Business cards, letterhead & envelopes.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Logos and branded elements.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Posters, banners and signage.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Social media graphics & digital marketing ads.</p>
            </li>
          </ul>
        </article>
        {/* End of graphic design */}
      </div>
    </section>
  );
};

export default Service;
