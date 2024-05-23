// import React from 'react'

// const Appointment = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Appointment

import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm.jsx";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
