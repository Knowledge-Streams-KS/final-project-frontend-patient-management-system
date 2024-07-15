import React from 'react'

const Appointment = () => {
  return (
   <>
    {/* <h1 className='text-2xl p-9 m-5'>Hello</h1>
    <p>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit temporibus ipsum expedita, asperiores laudantium sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti.
    </p> */}
    <h1 className='mt-20'></h1>
    <h1>Book your Appointment Now!</h1>
    <form>
      {/* for Patient */}
      <input type="text" name="" id="" placeholder='Enter Patient Name' />
      {/* for Doctor */}
      <input type="text" name="" id="" placeholder='Enter Doctor Name' />
      {/* medical History */}
      <label htmlFor="">Do you have any medical history</label>
      {/* yes */}
      <input type="radio" name="" id=""   />
      {/* no */}
      <input type="radio" name="" id="" />
      <select name="" id="" >Select Department 
        <option value="">Arthopedic</option>
        <option value="">cardiology</option>
        <option value="">Neurology</option>
      </select>
      {/* for date */}
      <input type="date" name="" id=""  />
      {/* for time */}
      <input type="time" name="" id="" />
      <button type="submit" className='bg-black text-white w-[500px] h-12 rounded-sm'>Book Now</button>
    </form>
   </>
  )
}

export default Appointment