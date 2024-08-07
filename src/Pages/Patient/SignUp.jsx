import { useFormik } from 'formik';
import React, { useState } from 'react';
import AxiosInstance from '../../axios/axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import FontAwesome icons

const initialValues = {
  name: '',
  phoneNo: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'patient',
  PatientName: '',
  DateOfBirth: '',
  gender: 'Male',
  address: '',
  medicalHistory: false
};

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log("Form values: ", values);

      if (values.password !== values.confirmPassword) {
        toast.error('Passwords must match!');
        return;
      }

      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        role: values.role,
        PatientName: values.PatientName,
        DateOfBirth: values.DateOfBirth,
        gender: values.gender,
        address: values.address,
        phoneNo: values.phoneNo,
        medicalHistory: values.medicalHistory,
        DoctorName: values.DoctorName,
        Specialization: values.Specialization
      };

      console.log("User data: ", userData);

      try {
        // Create user and patient/doctor in a single request
        const response = await AxiosInstance.post("/UserAuth/SignUp", userData);
        console.log(response);

        // Store user information in local storage
        localStorage.setItem("user", JSON.stringify({
          id: response.data.data.id,
          email: values.email,
          PatientId: response.data.data.PatientId,
          PatientName: response.data.data.PatientName
        }));

        setIsSubmitted(true);
        toast.success("Signup successful! Redirecting to dashboard...");

        setTimeout(() => {
          navigate('/PatientDashBoard');
          toast.dismiss();
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
          toast.error(error.response.data.Warning || 'Error submitting form. Please try again.');
        } else {
          toast.error('Error submitting form. Please try again.');
        }
      }
    }
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-teal-50 p-4">
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder='Enter your name'
            className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
          />
          <input
            type="text"
            name="phoneNo"
            value={values.phoneNo}
            onChange={handleChange}
            placeholder='Enter your phone number'
            className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
          />
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='w-full h-12 px-4 border rounded-md pr-12 focus:outline-none focus:ring-2 focus:ring-teal-300'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          <div className='relative'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder='Re-type your password'
              className='w-full h-12 px-4 border rounded-md pr-12 focus:outline-none focus:ring-2 focus:ring-teal-300'
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          
          {values.role === 'patient' && (
            <>
              <input
                type="text"
                name="PatientName"
                value={values.PatientName}
                onChange={handleChange}
                placeholder='Patient Name'
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              />
              <input
                type="date"
                name="DateOfBirth"
                value={values.DateOfBirth}
                onChange={handleChange}
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              />
              <select
                name="gender"
                value={values.gender}
                onChange={handleChange}
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder='Address'
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              />
              <div className='flex items-center'>
                <input
                  type="checkbox"
                  name="medicalHistory"
                  checked={values.medicalHistory}
                  onChange={(e) => setFieldValue('medicalHistory', e.target.checked)}
                  className='h-5 w-5'
                />
                <label htmlFor="medicalHistory" className='ml-2 text-gray-700'>Medical History</label>
              </div>
            </>
          )}
          {values.role === 'doctor' && (
            <>
              <input
                type="text"
                name="DoctorName"
                value={values.DoctorName}
                onChange={handleChange}
                placeholder='Doctor Name'
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              />
              <input
                type="text"
                name="Specialization"
                value={values.Specialization}
                onChange={handleChange}
                placeholder='Specialization'
                className='w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300'
              />
            </>
          )}
          <p className="text-center text-gray-700">
            If you are already registered,{' '}
            <NavLink to="/PatientLogin" className="text-teal-600 font-semibold">Log In</NavLink>
          </p>
          <button
            type="submit"
            className='w-full h-12 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
