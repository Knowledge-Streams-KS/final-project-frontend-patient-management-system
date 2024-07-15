import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Departments = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <h1 className='text-2xl p-9 m-5'>Jello</h1>
    <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
    <p>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit temporibus ipsum expedita, asperiores laudantium sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti.
    </p>

   </>
  )
}

export default Departments