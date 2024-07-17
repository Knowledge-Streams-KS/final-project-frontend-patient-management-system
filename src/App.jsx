
import './App.css'
import Header from './Components/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DefaultLayout from './Layouts/DefaultLayout'
import Appointment from './Pages/Patient/Appointment'
import Doctors from './Pages/Doctor/DoctorDashBoard'
import FAQ from './Pages/Patient/FAQ'
import Departments from './Pages/Departments'
//toastify -> displaying alerts 
//import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/Patient/SignUp'
import PatientDashBoard from './Pages/Patient/PatientDashBoard'
import PatientLayout from './Layouts/PatientLayout'
import SignUpDoctor from './Pages/Doctor/SignUpDoctor'
import DoctorLayout from './Layouts/DoctorLayout'
import DoctorDashBoard from './Pages/Doctor/DoctorDashBoard'
import MedicalRecord from './Pages/Patient/MedicalRecord'

function App() {


  return (
    <>
      {/* <Header/> */}
  
      <Routes>
        <Route path='/' element = {<DefaultLayout><Home/></DefaultLayout>}/>
        <Route path='/Appointment' element = {<PatientLayout><Appointment/></PatientLayout>}/>
        <Route path='/Doctors' element = {<DefaultLayout><Doctors/></DefaultLayout>}/>
        <Route path='/FAQ' element = {<PatientLayout><FAQ/></PatientLayout>}/>
        <Route path='/Departments' element = {<DefaultLayout><Departments/></DefaultLayout>}/>
        <Route path='/SignUp' element = {<SignUp/>} />
        <Route path='/PatientDashBoard' element = {<PatientLayout><PatientDashBoard/></PatientLayout>}/>
        <Route path='/SignUpDoctor' element = {<SignUpDoctor/>} />
        <Route path='/DoctorDashBoard' element = {<DoctorLayout><DoctorDashBoard/></DoctorLayout>}/>
        <Route path='/MedicalRecord' element = {<PatientLayout><MedicalRecord/></PatientLayout>} />

      </Routes> 
      <ToastContainer position='top-center'/>
  
    </>
  )
}

export default App
