import React from 'react';
import { useFormik } from 'formik';
import faq from "../../assets/faq.json"
import Lottie from 'lottie-react';
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
        toast.success(response.data.success, { autoClose: 1000 }); // Toast disappears after 1 seconds
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again.', {autoClose: 1000}); // Toast disappears after 1 seconds
      }
    }
  });

  console.log(values);

  return (
    <>
      <div className = "mt-[100px]">
        <h1 className='text-3xl font-bold mb-10'>Find Us At!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo nostrum nam, maiores maxime saepe fugit accusantium autem, reiciendis harum velit mollitia placeat veniam ratione omnis facere voluptas ab. Quia?
            Aperiam, ducimus vel. Expedita dolore, a vitae explicabo quia consequuntur reprehenderit animi doloribus nam libero neque sapiente rerum, veniam facilis! Esse harum expedita ad similique quibusdam id quaerat praesentium consectetur.
            Hic sapiente ratione enim debitis nulla voluptatibus a, explicabo, esse rem obcaecati unde cum quos nihil ut alias! Sequi praesentium placeat eveniet eligendi culpa ea mollitia pariatur impedit dolorum recusandae?
          </p>
        </div>
    <div className='min-h-[700px] flex space-x-6'>
    
      <div>
      
        <div className="animation basis-1/2 m-0 p-0 h-[100px] "> <Lottie animationData={faq} className="h-[450px] w-[500px] mt-[60px]" /></div>
        </div>
      <div className=''>
        
        <form onSubmit={handleSubmit} className=''>
        <h1 className='text-3xl font-bold text-center mt-20 mb-5'>Feel Free to Contact Us</h1>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName} 
              className='w-[500px] h-11 mb-5 text-center rounded-3xl'
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
              className='w-[500px] h-11 mb-5 text-center rounded-3xl'
            />
          <br />
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
             className='w-[500px] h-11 mb-5 text-center rounded-3xl'
          />
          <br />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className='mb-5 w-[500px] h-[55px] text-center p-3 rounded-3xl'
          ></textarea>
          <br />
          <button type="submit" className='bg-black text-white w-[500px] h-12 rounded-3xl'>Submit</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default FAQ;
