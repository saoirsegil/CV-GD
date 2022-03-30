import React from 'react';
import './Testimonial.css';
import avtr1 from '../../assets/avtr11.jpg';
import avtr2 from '../../assets/avtr22.jpg';
import avtr3 from '../../assets/avtr33.jpg';
import avtr4 from '../../assets/avtr44.jpg';
import avtr5 from '../../assets/avtr55.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    Avatar: avtr1,
    Name: 'Dindo Leonard Paran',
    Review:
      'Throughout the graphic design process, we had a terrific time working with Jayson. He communicates effectively and simply. Jaysons brilliance is demonstrated by his ability to take our vision/mission and turn it into a logo that accurately reflects it.',
  },
  {
    Avatar: avtr2,
    Name: 'Jajie Jam Abergas',
    Review:
      'Jayson has an endless supply of innovative ideas, which he uses to consistently surprise and excite me with every creative design task I give him. Jayson is constantly coming up with new ideas. And his ideas arent merely for show. They are always making a point or selling an idea.',
  },
  {
    Avatar: avtr3,
    Name: 'Algyn Piezas',
    Review:
      'Jayson and I collaborated on a number of projects, including a complete overhaul and re-design of our website. He is a gifted artist with a wide range of abilities. I continue to use his services to this day since he is always quick to react to requests and extremely thorough. He is unquestionably the greatest. Thank you so much, Jayson!',
  },
  {
    Avatar: avtr4,
    Name: 'Analyn Naca',
    Review:
      'Jayson is the welcoming face of the graphic design profession. Jayson has designed logos, marketing collateral, and websites for us, and he is quick, simple to work with, and provides excellent value on every assignment. We cant afford a full-time graphic designer, but Jayson can help us create a memorable brand.',
  },
  {
    Avatar: avtr5,
    Name: 'Gimmariese Diaz',
    Review:
      'Jayson did an outstanding job developing a logo, website, and other advertising materials for me, and he did it swiftly! Every time I have a need, I will turn to Jayson for assistance. I cant say enough good things about the experience, Jayson.',
  },
];

const Testimonial = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ Avatar, Name, Review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={Avatar} alt="Avatar4" />
              </div>
              <h5 className="client__name">{Name} </h5>
              <small className="client__review">{Review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
