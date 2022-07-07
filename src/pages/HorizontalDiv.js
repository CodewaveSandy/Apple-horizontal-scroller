import React, { useEffect, useState } from 'react';

const HorizontalDiv = ({ children, id }) => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0); // control slide number
  const [isSlider, setIsSlider] = useState(false); // control if we are on middle of slider
  useEffect(() => {
    const scroller = document.getElementById(id); // Grab the Slider
    const currentTop = scroller.offsetTop; // Grab the position of the slider within body
    const scrollerParent = scroller.parentElement; // Grab the parent of the slider\

    // Setting the parent height to the height of a single child *  number of child
    const parentheight = scroller.offsetHeight * Array.from(children).length;
    scrollerParent.style.height = `${parentheight}px`;

    // Event listener on scroll
    window.addEventListener('scroll', () => {
      // Grab how much user scrolled
      const scrolled = window.scrollY;

      // If we are in between of parent then fix the first child
      // with a position fix to visible top on the screen
      if (scrolled > currentTop && scrolled < parentheight) {
        // Setting the slide number
        setCurrentSlideNumber(
          (Math.round(scrolled / currentTop) <= 5
            ? Math.round(scrolled / currentTop)
            : 5) - 1
        );
        setIsSlider(false); // false means we are in between slider
        scroller.classList.add('fixed'); // Add the class name to the child for position fix
      } else {
        scroller.classList.remove('fixed'); // Removing the class name after slide end
      }

      if (scrolled > parentheight) setIsSlider(true); // true means we end up the slider
    });
  }, []);

  return (
    <div className='em-slide'>
      {/* Showing the slides */}
      <div className='my-slider' id={id}>
        {children[currentSlideNumber]}
      </div>
      {/* Copy of the last slider for the user to give them a smooth experience */}
      {isSlider && children[currentSlideNumber]}
    </div>
  );
};

export default HorizontalDiv;
