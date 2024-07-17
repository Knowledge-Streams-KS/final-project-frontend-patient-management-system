import React from 'react'
import Lottie from 'lottie-react'
// import Bio from "../assets/BioGraphy.json"
import logo from "../assets/mainLogo.json"
const Biography = () => {
  return (
    <div className='BioGraphy flex mt-[-150px] w-full'>
       <div className="animation   m-0 p-0  mt-[-290px]">
       <Lottie animationData={logo} className="h-[1200px]" />
       </div>
       <div className="bio p-14 w-[1000px]">
        <h1 className='text-3xl font-bold font-mono'>Biography</h1>
        <h2 className='mt-3 text-xl font-semibold font-mono'>Who we are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores dolor nisi ratione exercitationem iste in laudantium similique incidunt modi eligendi aliquid repellat, fugiat nesciunt id quas temporibus aspernatur reiciendis.
        Vitae, deleniti quidem, sapiente placeat veritatis modi maiores accusantium mollitia commodi beatae quaerat, repudiandae nobis consequuntur est voluptates in fuga! At nesciunt eligendi animi nemo et totam odit exercitationem debitis.
        Reiciendis aspernatur perspiciatis quas odit aliquid. Sunt laborum ad in rem sapiente odit, nulla iste itaque repellendus quo quibusdam eum voluptates, blanditiis voluptatem dolorem, sed fugit et quod placeat unde!
        Dignissimos praesentium pariatur vitae. sequi blanditiis ex a consectetur temporibus doloribus, nisi culpa odit cumque alias laudantium aut incidunt amet deleniti corrupti rerum tempore? Reprehenderit mollitia architecto nulla?</p>
        <br />
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora vel doloremque magnam nesciunt optio, quod eveniet quasi aliquam amet laboriosam! Maiores eum dignissimos odio, temporibus non maxime ea nobis beatae.
        Voluptatum ipsum in iste recusandae dolores, perferendis ducimus eaque ex, aliquid possimus quam unde? Voluptate cumque molestiae libero harum mollitia quis eum? Cum ratione beatae a quidem architecto optio fugiat!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, corporis fugiat! Laborum quam quis nemo?</p> */}
       </div>
    </div>
  )
}

export default Biography