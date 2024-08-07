import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import AxiosInstance from '../../axios/axios';

const Appointment = ({ patientId, doctorId }) => {
  const [initialValues, setInitialValues] = useState({
    PatientName: '',
    DoctorName: '',
    date: '',
    time: '',
    Specialization: '',
    department: '',
    hasVisited: false,
    status: 'pending',
    medicalHistory: false,
  });

  const [toastMessage, setToastMessage] = useState('');
  const [patientNameError, setPatientNameError] = useState(false);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await AxiosInstance.get(`/GetSinglePatient/${patientId}`);
        const patient = response.data.patient;
        setInitialValues((prevValues) => ({
          ...prevValues,
          PatientName: localStorage.getItem('PatientName') || patient.PatientName,
        }));
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    const fetchDoctorData = async () => {
      try {
        const response = await AxiosInstance.get(`/findDoctor/${doctorId}`);
        const doctor = response.data.doctor;
        setInitialValues((prevValues) => ({
          ...prevValues,
          DoctorName: doctor.DoctorName,
          Specialization: doctor.Specialization,
        }));
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    if (patientId) {
      fetchPatientData();
    }
    if (doctorId) {
      fetchDoctorData();
    }
  }, [patientId, doctorId]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log('Form Submitted', values); // Check if this logs the form values
    
      if (!values.PatientName) {
        setPatientNameError(true);
        setToastMessage('Please enter a valid patient name.');
        return;
      }
    
      try {
        const response = await AxiosInstance.post('/AddAppointment', {
          AppointmentDate: values.date,
          AppointmentTime: values.time,
          PatientName: values.PatientName,
          DoctorName: values.DoctorName,
          Specialization: values.Specialization,
          Department: values.department,
          hasVisited: values.hasVisited,
          status: values.status,
          medicalHistory: values.medicalHistory,
        });
        console.log('Appointment response:', response); // Check the response
    
        setToastMessage('Appointment booked successfully!');
        setPatientNameError(false);
      } catch (error) {
        console.error('Error booking appointment:', error.response?.data || error.message);
        setToastMessage(error.response?.data || 'An error occurred while booking the appointment.');
      }
    
      setTimeout(() => {
        setToastMessage('');
      }, 2000);}
    });
    
  return (
    <div className="appointment-container bg-gradient-to-br from-teal-400 to-teal-600 p-8 flex items-center justify-center min-h-[700px] mt-[200px] mb-[200px]">
      <div className="appointment-form-wrapper bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6 text-center">Book Your Appointment</h1>
        {toastMessage && (
          <div className="toast bg-teal-800 text-white p-3 rounded-lg shadow-md fixed bottom-4 right-4">
            {toastMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="form-group">
              <label className="block text-teal-700 font-semibold mb-2" htmlFor="PatientName">
                Patient Name
              </label>
              <input
                type="text"
                name="PatientName"
                id="PatientName"
                placeholder="Enter Patient Name"
                value={values.PatientName}
                onChange={handleChange}
                className={`w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105 ${patientNameError ? 'border-red-500' : ''}`}
              />
            </div>
            <div className="form-group">
              <label className="block text-teal-700 font-semibold mb-2" htmlFor="DoctorName">
                Doctor Name
              </label>
              <input
                type="text"
                name="DoctorName"
                id="DoctorName"
                placeholder="Enter Doctor Name"
                value={values.DoctorName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="form-group">
              <label className="block text-teal-700 font-semibold mb-2" htmlFor="Specialization">
                Doctor Specialization
              </label>
              <input
                type="text"
                name="Specialization"
                id="Specialization"
                placeholder="Enter specialization"
                value={values.Specialization}
                onChange={handleChange}
                required
                className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-teal-700 font-semibold mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={values.date}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="form-group">
                <label className="block text-teal-700 font-semibold mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={values.time}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="block text-teal-700 font-semibold mb-2" htmlFor="department">
                Department
              </label>
              <select
                name="department"
                id="department"
                value={values.department}
                onChange={handleChange}
                required
                className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <option value="">Select Department</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-teal-700 font-semibold mb-2" htmlFor="hasVisited">
                  Has Visited
                </label>
                <input
                  type="checkbox"
                  name="hasVisited"
                  id="hasVisited"
                  checked={values.hasVisited}
                  onChange={handleChange}
                  className="h-6 w-6 text-teal-600 focus:ring-teal-500 transition duration-300 ease-in-out"
                />
              </div>
              <div className="form-group">
                <label className="block text-teal-700 font-semibold mb-2" htmlFor="status">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={values.status}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <option value="pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="block text-teal-700 font-semibold mb-2" htmlFor="medicalHistory">
                Medical History
              </label>
              <input
                type="checkbox"
                name="medicalHistory"
                id="medicalHistory"
                checked={values.medicalHistory}
                onChange={handleChange}
                className="h-6 w-6 text-teal-600 focus:ring-teal-500 transition duration-300 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
