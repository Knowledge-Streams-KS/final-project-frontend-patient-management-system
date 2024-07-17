import { useFormik } from 'formik'
import React from 'react'
const initialValues = {

}
const Appointment = () => {
 const {values, handleChange, handleSubmit} = useFormik({
initialValues: initialValues,
onSubmit: (values) => {
  console.log("Form is submitted", values)
}
 })
  return (
   <>
    {/* <h1 className='text-2xl p-9 m-5'>Hello</h1>
    <p>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit temporibus ipsum expedita, asperiores laudantium sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti.
    </p> */}
    <h1 className='mt-20'></h1>
    <h1>Book your Appointment Now!</h1>
   <div>
   <form>
      {/* for Patient */}
      <input type="text" name="PatientName" id="" placeholder='Enter Patient Name'  />
    
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
        {/* for Doctor */}
        <input type="text" name="" id="" placeholder='Enter Doctor Name' />
      {/* for date */}
      <input type="date" name="" id=""  />
      {/* for time */}
      <input type="time" name="" id="" />
      <button type="submit" className='bg-black text-white w-[500px] h-12 rounded-sm'>Book Now</button>
    </form>
   </div>
   </>
  )
}

export default Appointment