import Lottie from "lottie-react"
import Header from "../Components/Header"
import lottie from "lottie-react"
import logo from "../assets/mainLogo.json"
import Biography from "../Components/Biography"
import faq from "../assets/faq.json"
import FAQ from "./Patient/FAQ"
import image from "../assets/Images/PMS.jpg"

import Departments from "./Departments"
const Home = () => {
return (
    <>
    {/* <Header/> */}
    <br />
    <div className="main  w-full flex justify-center items-center m-0 p-0 mt-[-150px]">
  <div className="heading   mt-[160px] ">
    {/* <h1 className="text-3xl font-bold mb-2 font-mono">Patient Management System</h1>
    <p className="p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit temporibus ipsum expedita, asperiores laudantium sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti. sint eligendi, eveniet nihil ea blanditiis numquam quibusdam laboriosam quos quas voluptate? Omnis, distinctio corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eum?</p> */}
    <div className="background image min-w-[1069px] h-[90vh] overflow-hidden mb-24" > 
      <img src={image} alt="hi" className="min-w-[1199px] overflow-hidden min-h-[90vh] mr-[320px]  brightness-50 object-cover"  />
    </div>
  </div>
  {/* <div className="animation basis-1/2  m-0 p-0">
    <Lottie animationData={logo} className="h-[1000px]" />
  </div> */}
</div>
<br /><br /><br />
<div className="mt-[50px]">
<Biography/>
</div>
<br />
<div className="mb-[150px]">
  <Departments/>
</div>
<br />
{/* <div className="mt-20">
<h1 className="text-2xl p-9 m-5 font-bold mt-10">Feel free to Contact Us</h1>
<div className="bg-teal-200 flex h-[500px] w-[1000px] p-10 space-x-8 rounded-md">
 <div className="animation basis-1/2 m-0 p-0 h-[100px]"> <Lottie animationData={faq} className="h-[400px] w-[400px]" /></div>
<FAQ className="mb-12 mt-12"/>

</div> */}
{/* </div> */}
    </>
)
}
export default Home