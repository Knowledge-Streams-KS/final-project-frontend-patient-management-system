import { useFormik } from 'formik'
import React from 'react'

const Appointment = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      patientName: '',
      medicalHistory: '',
      department: '',
      doctorName: '',
      date: '',
      time: '',
    },
    onSubmit: (values) => {
      console.log("Form is submitted", values)
    }
  })

  return (
    <>
       <div className = "mt-[100px]">
        <h1 className='text-3xl font-bold mb-10'>Fnd More About Booking an Appointment!</h1>
          <p className='mb-10'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo nostrum nam, maiores maxime saepe fugit accusantium autem, reiciendis harum velit mollitia placeat veniam ratione omnis facere voluptas ab. Quia?
            Aperiam, ducimus vel. Expedita dolore, a vitae explicabo quia consequuntur reprehenderit animi doloribus nam libero neque sapiente rerum, veniam facilis! Esse harum expedita ad similique quibusdam id quaerat praesentium consectetur.
            Hic sapiente ratione enim debitis nulla voluptatibus a, explicabo, esse rem obcaecati unde cum quos nihil ut alias! Sequi praesentium placeat eveniet eligendi culpa ea mollitia pariatur impedit dolorum recusandae?
          </p>
        </div>
      <div className="bg-white shadow-md rounded-md p-4 h-[500px] mb-24">
        <h1 className="text-2xl font-bold mb-4 p-2 m-2">Book Your Appointment Now!</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2" htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                name="patientName"
                id="patientName"
                placeholder="Enter Patient Name"
                value={values.patientName}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="medicalHistory">Medical History</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="medicalHistory"
                  id="yes"
                  value="yes"
                  checked={values.medicalHistory === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700" htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  name="medicalHistory"
                  id="no"
                  value="no"
                  checked={values.medicalHistory === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700" htmlFor="no">No</label>
              </div>
            </div>
            <div>
              <label className="block mb-2" htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                value={values.department}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              >
                <option value="">Select Department</option>
                <option value="Arthopedic">Arthopedic</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
            <div>
              <label className="block mb-2" htmlFor="doctorName">Doctor Name</label>
              <input
                type="text"
                name="doctorName"
            
                placeholder="Enter Doctor Name"
                value={values.doctorName}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="date">Date</label>
              {/* htmlfor is use to make the link between label and the input */}
              <input
                type="date"
                name="date"
          
                value={values.date}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
               
                value={values.time}
                onChange={handleChange}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full p-2 mt-10 rounded-sm "
          >
            Book Now
          </button>
        </form>
      </div>
      <br /><br /><br />
    </>
  )
}

export default Appointment