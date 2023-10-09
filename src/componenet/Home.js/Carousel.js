import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import P1  from './../../assets/P1.jpg';
import P2  from './../../assets/P2.jpg';
import P3 from './../../assets/P3.jpg'; 

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='caro'>
        
        <Carousel.Caption>
        <img src={P1} alt='p1' className='imgCaro'/>
          <h3>Mark fit - Fitness Coach</h3>
          <p>The OAT-Sandwich was an absolute delight! The combination of flavors was simply exquisite. 
            The entire experience was a testament to the dedication and expertise of the chefs at FIT-FOOD.
             </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caro'>
   
        <Carousel.Caption>
        <img src={P2} alt='p2' className='imgCaro'/>
          <h3>Jhon Doe - Nutritionist</h3>
          <p>Delicious flavors, warm ambiance, and impeccable service - dining at FIT-FOOS is truly a culinary journey.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='caro'>
       
        <Carousel.Caption>
        <img src={P3} alt='p3' className='imgCaro'/>
          <h3>Merry Doe - Loyal Client</h3>
          <p>
          Every dish tells a story, crafted with passion and attention to detail. From the moment I took my first bite, I knew I was in for a treat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;