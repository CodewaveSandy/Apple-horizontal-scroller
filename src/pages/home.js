import React from 'react';
import { Logo, Pic1, Pic2, Pic3, RightArrowShort } from '../assets';
import Licence from '../components/Home/Licence';
import HorizontalDiv from './HorizontalDiv';
// import { useHorizontalScroll } from './hook';

const childs = [
  {
    heading: 'Slide 1',
    text: 'Slide 1 text',
    img: Pic1.default,
    bgColor: 'blueviolet',
  },
  {
    heading: 'Slide 2',
    text: 'Slide 2 text',
    img: Pic2.default,
    bgColor: 'teal',
  },
  {
    heading: 'Slide 3',
    text: 'Slide 3 text',
    img: Pic3.default,
    bgColor: 'lightblue',
  },
  {
    heading: 'Slide 4',
    text: 'Slide 4 text',
    img: Pic3.default,
    bgColor: 'bisque',
  },
  {
    heading: 'Slide 5',
    text: 'Slide 5 text',
    img: Pic3.default,
    bgColor: 'lightblue',
  },
];
const Home = () => (
  <div className='cwr_homepage_wrapper'>
    <div className='cwr_header'>
      <img src={Logo.default} alt='' className='header_logo' />
      <span>
        <a
          href='https://cwrdocs.netlify.app'
          target='_blank'
          rel='noreferrer noopener'
        >
          See Documentation
          <RightArrowShort.default />
        </a>
      </span>
    </div>
    <div className='cwr_body'>
      <div className='body_heading'>
        <h1>
          The
          <span> React Template</span>
        </h1>
        <h2>For Codewave</h2>
      </div>
      <div className='body_text'>
        <p>
          This template gives you the best developer experience with all the
          features you need to start development quicker:
          <b> Folder Structure,</b>
          <b> Routing,</b>
          <b> Protected Route,</b>
          <b> Redux,</b>
          <b> Maintain on Page Reload,</b>
          <b> Styles (CSS, SCSS). </b>
          No config needed but if you you want to modify then the limit is upto
          your imagination
        </p>
      </div>
      <Licence />
    </div>
    <HorizontalDiv id='slider'>
      {[...childs].map((el, idx) => (
        <div
          className='slider-menu'
          test={idx}
          key={`${el.heading}_${idx + 1}`}
          style={{ backgroundColor: el.bgColor }}
        >
          <div className='slider-text'>
            <h1>{el.heading}</h1>
            <p>{el.text}</p>
          </div>
          <div className='slider-img'>
            <img src={el.img} alt='' />
          </div>
        </div>
      ))}
    </HorizontalDiv>
    <div style={{ height: '100vh', backgroundColor: 'bisque' }} />
  </div>
);

export default Home;
