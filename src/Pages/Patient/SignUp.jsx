import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../axios/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  phoneNo: '',
  email: '',
  password: '',
  confirmPassword: '',
  role : '',
};

const SignUp = () => {
  const [isSubmitted , setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log("Form is submitted ", values,
        
      );
      if (values.password !== values.confirmPassword) {
        toast.error('Password does not match!');
        return;
      }
      
      try {
        const response = await AxiosInstance.post("/UserAuth/SignUp", values, {});
        console.log(response);
       //setting is submitting true so can do navigation easily 
        setIsSubmitted(true);
        toast.success(response.data.message); // Ensure this matches the backend response
        //navigating to particulalar page
        
      //  if (values.role === 'patient') {
      //     // navigate('/PatientDashBoard');
      //   }
      
       
      } catch (error) {
        console.error('Error submitting form:', error);
       toast.error('Error submitting form. Please try again.');
      
    }
      
    }
  });
 //useEffect -> to record that change 
 useEffect(() => {
  if (isSubmitted) {
    setTimeout(() => {
      navigate('/PatientDashBoard'); // Navigate to PatientDashboard page after a delay
      toast.dismiss(); // Dismiss the toast message
    }, 3000); // Delay of 3 seconds
  }
}, [isSubmitted]);

  return (
    <div className="min-h-[600px] min-w-[500px] flex justify-center items-center mt-10">
      <div className='h-[600px] w-[500px] rounded-md shadow-2xl'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={values.name} onChange={handleChange} placeholder='Enter your name' className='h-[40px] w-[400px] mb-10 mt-10 text-center' />
          <br />
          <input type="text" name="phoneNo" value={values.phoneNo} onChange={handleChange} 
          placeholder='Enter your phone number'  className='h-[40px] w-[400px] mb-10 text-center'/>
          <br />
          <input type="email" name="email" value={values.email}
           onChange={handleChange} placeholder='Enter your email' className='h-[40px] w-[400px] mb-10
           text-center'/>
          <br />
          <input type="password" name="password" value={values.password}
           onChange={handleChange} placeholder='Enter your password' className='h-[40px] w-[400px] mb-10
           text-center' />
          <br />
          <input type="password" name="confirmPassword" value={values.confirmPassword} 
          onChange={handleChange} placeholder='Re-type your password' className='h-[40px] w-[400px] mb-10
          text-center' />
          <br />
          {/* <select name="role"  onChange={handleChange} className='h-[40px] w-[400px] mb-10 text-center'>
          <option value="" disabled>Select your role</option>
          <option value={values.role}>Patient</option>
          </select> */}
          <br />
          <button type="submit" className='bg-black text-white w-28 rounded-sm h-[40px]'>SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
