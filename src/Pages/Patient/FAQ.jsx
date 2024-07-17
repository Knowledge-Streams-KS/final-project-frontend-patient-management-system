import React from 'react';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from '../../axios/axios';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const FAQ = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log('Form submitted:', values);
      
      try {
        const response = await AxiosInstance.post('/AddMessage', values, {
         
        });
        console.log(response)
        toast.success(response.data.success);
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again.');
      }
    }
  });

  console.log(values);

  return (
    <>
    
      <div className=''>
        <form onSubmit={handleSubmit} className=''>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName} 
            className='w-[500px] h-11 mb-5 text-center'
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
             className='w-[500px] h-11 mb-5 text-center'
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
             className='w-[500px] h-11 mb-5 text-center'
          />
          <br />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className='mb-5 w-[500px] h-[150px] text-center p-3'
          ></textarea>
          <br />
          <button type="submit" className='bg-black text-white w-[500px] h-12 rounded-sm'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default FAQ;
