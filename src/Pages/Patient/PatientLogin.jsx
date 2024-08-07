import { useFormik } from 'formik';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AxiosInstance from '../../axios/axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import FontAwesome icons

const initialValues = {
  email: '',
  password: '',
  rememberMe: false // Add rememberMe field
};

const PatientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      try {
        const response = await AxiosInstance.post('/UserAuth/SignIn', {
          email: values.email.trim(),
          password: values.password.trim()
        });

        if (response.data.token) {
          localStorage.setItem('LoggedIn', true);
          localStorage.setItem('token', response.data.token);

          // Fetch user details using the token
          try {
            const userResponse = await AxiosInstance.get('/GetUserDetails', {
              headers: {
                'Authorization': `Bearer ${response.data.token}`
              }
            });

            if (userResponse.data.user) {
              localStorage.setItem('user', JSON.stringify(userResponse.data.user));
              toast.success("Login successful! Redirecting to dashboard...");
              navigate("/PatientDashBoard");
            } else {
              toast.error("Failed to fetch user details.");
            }
          } catch (error) {
            toast.error("An error occurred while fetching user details. Please try again.");
            console.error('Fetch user details error:', error);
          }
        } else {
          toast.error("Invalid Credentials.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error('Login error:', error);
      }
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-teal-800 mb-6 text-center">Welcome Back!</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter your email"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={handleChange}
              value={values.password}
              className="w-full h-12 px-4 border rounded-md pr-12 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter your password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Log In
          </button>
          <p className="text-center text-gray-700">
            If you don't have an account,{' '}
            <NavLink to="/SignUp" className="text-teal-600 font-semibold">Sign Up here!</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PatientLogin;
