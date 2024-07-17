import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import heart from "../assets/Images/heart.jpg"

const Departments = () => {
  const responsive = {
    superLargeDesktop: {
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
    <div className='mt-[-350px]'>
    <h1 className='text-3xl p-9 m-5 font-bold'>Our Services</h1>
    <p className='mb-[10px]'>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit temporibus ipsum expedita, asperiores laudantium sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti.
    </p>
    <br />
    <Carousel responsive={responsive} gap={30}>
      <div className='space-x-4'>
        <div className='relative  "'>
          <img src={heart} alt="" className='min-h-10' />
          <div className='absolute top-[300px] left-4 p-4 text-white bg-black w-[380px] rounded-[100px] '>
          <h2 className='text-2xl' >Cardiology</h2>
          </div>
        </div>
      </div>
      <div>
        <div className='relative'>
          <img src={heart} alt="" className='min-h-10' />
          <div className='absolute top-[300px] left-4 p-4 text-white bg-black w-[380px] rounded-[100px]'>
          <h2 className='text-2xl' >Cardiology</h2>
          </div>
        </div>
      </div>
      <div>
        <div className='relative"'>
          <img src={heart} alt="" className='min-h-10' />
          <div className='absolute top-[300px] left-4 p-4 text-white bg-black w-[380px] rounded-[100px]'>
          <h2 className='text-2xl' >Cardiology</h2>
          </div>
        </div>
      </div>
      <div>
        <div className='relative'>
          <img src={heart} alt="" className='min-h-10' />
          <div className='absolute top-[300px] left-4 p-4 text-white bg-black w-[380px] rounded-[100px]'>
            <h2 className='text-2xl' >Cardiology</h2>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  

   </>
  )
}

export default Departments