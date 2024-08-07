import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../axios/axios';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.id) {
        try {
          const response = await AxiosInstance.get(`/GetSinglePatient/${user.id}`);
          console.log('Fetched patient data:', response.data);
          if (response.data && response.data.patient) {
            setPatient(response.data.patient);
          } else {
            console.error('Unexpected response structure:', response);
            setError('Failed to fetch patient data. Please try again later.');
          }
        } catch (error) {
          console.error('Error fetching patient data:', error);
          setError('Failed to fetch patient data. Please try again later.');
        }
      }
    };

    const fetchAppointments = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('LocalStorage Data:', localStorage.getItem('user'));
      if (user && user.id) {
        try {
          const response = await AxiosInstance.get(`/appointments/patient/${user.id}`);
          console.log('Fetched appointments:', response.data);
          if (response.data && response.data.AppointMentRecord) {
            const appointments = response.data.AppointMentRecord;
            const past = appointments.filter((appointment) => new Date(appointment.AppointmentDate) < new Date());
            const upcoming = appointments.filter((appointment) => new Date(appointment.AppointmentDate) >= new Date());
            setPastAppointments(past);
            setUpcomingAppointments(upcoming);
          } else {
            console.error('Unexpected response structure:', response);
            setError('Failed to fetch appointments. Please try again later.');
          }
        } catch (error) {
          console.error('Error fetching appointments:', error.response?.data || error.message);
          setError('Failed to fetch appointments. Please try again later.');
        }
      }
    };

    fetchPatientData();
    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-teal-50">
      <h1 className="text-3xl font-bold mt-20 mb-4 text-teal-800">Patient Dashboard</h1>
      <div className="bg-teal-600 w-full max-w-4xl rounded-md p-4 mb-6 shadow-lg text-white">
        <h1 className="text-2xl p-2">
          Welcome Back! - {patient ? patient.PatientName : 'Loading...'}
        </h1>
        <p className="text-lg">We are here to help you</p>
      </div>
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4 w-full max-w-4xl">
          <p>{error}</p>
        </div>
      )}
      <div className="w-full max-w-4xl overflow-x-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow rounded-md">
            <h2 className="text-xl font-bold mb-4">Past Appointments</h2>
            {pastAppointments.length > 0 ? (
              pastAppointments.map((appointment, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md shadow-sm">
                  <p className="text-gray-700"><span className="font-bold">Patient Name:</span> {appointment.Patient?.PatientName || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Doctor Name:</span> {appointment.Doctor?.DoctorName || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Appointment Date:</span> {appointment.AppointmentDate.split('T')[0] || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Appointment Time:</span> {appointment.AppointmentTime || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No past appointments found</p>
            )}
          </div>
          <div className="p-4 bg-white shadow rounded-md">
            <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md shadow-sm">
                  <p className="text-gray-700"><span className="font-bold">Patient Name:</span> {appointment.Patient?.PatientName || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Doctor Name:</span> {appointment.Doctor?.DoctorName || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Appointment Date:</span> {appointment.AppointmentDate.split('T')[0] || 'N/A'}</p>
                  <p className="text-gray-700"><span className="font-bold">Appointment Time:</span> {appointment.AppointmentTime || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No upcoming appointments found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
