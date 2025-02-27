// // import React, { useContext, useEffect, useState } from 'react'
// // import { Context } from '..';
// // import { Navigate } from 'react-router';
// // import axios from 'axios';

// // const Messages = () => {
// //   const[messages,setMessages]= useState([]);
// //   const{ isAuthenticated} = useContext(Context);
// //   useEffect(()=>{
// //     try {
// //       const fetchMessages = async () =>{
// //         const{data} = await axios.get("http://localhost:4000/api/v1/message/getall",{
// //           withCredentials:true,
// //         })
// //         setMessages(data.messages);
// //       }
// //     } catch (error) {
// //       console.log(error.reponse.data.messages);
// //     }
    

// //     fetchMessages();
    
   
// //   },[]);
// //   if(!isAuthenticated){
// //     return <Navigate to={"/"}/>
// //   }
// //   return (
// //    <section className= "page messages">
// //     <h1>MESSAGE</h1>
// //     <div className='banner'>
// //     {messages && messages.length > 0 ? (messages.map((element)=>{
// //         messages.map((element) => {
// //           return (
// //             <div className="card" key={element._id}>
// //               <div className="details">
// //                 <p>
// //                   First Name: <span>{element.firstName}</span>
// //                 </p>
// //                 <p>
// //                   Last Name: <span>{element.lastName}</span>
// //                 </p>
// //                 <p>
// //                   Email: <span>{element.email}</span>
// //                 </p>
// //                 <p>
// //                   Phone: <span>{element.phone}</span>
// //                 </p>
// //                 <p>
// //                   Message: <span>{element.message}</span>
// //                 </p>
// //               </div>
// //             </div>
// //           );
// //         })
// //     })):(<h1>No Messages</h1>)}

// //     </div>
// //    </section>
// //   )
// // }

// // export default Messages


// import React, { useContext, useEffect, useState } from 'react';
// import { Context } from '..';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const { isAuthenticated } = useContext(Context);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:4000/api/v1/message/getall", {
//           withCredentials: true,
//         });
//         setMessages(data.messages);
//       } catch (error) {
//         console.log(error.response.data.messages);
//       }
//     };

//     fetchMessages();
//   }, []);

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <section className="page messages">
//       <h1>MESSAGES</h1>
//       <div className="banner">
//         {messages && messages.length > 0 ? (
//           messages.map((element) => (
//             <div className="card" key={element._id}>
//               <div className="details">
//                 <p>
//                   First Name: <span>{element.firstName}</span>
//                 </p>
//                 <p>
//                   Last Name: <span>{element.lastName}</span>
//                 </p>
//                 <p>
//                   Email: <span>{element.email}</span>
//                 </p>
//                 <p>
//                   Phone: <span>{element.phone}</span>
//                 </p>
//                 <p>
//                   Message: <span>{element.message}</span>
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Messages</h1>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Messages;


import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/message/getall", {
          withCredentials: true,
        });
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response?.data?.message || "An error occurred");
      }
    };

    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="page messages">
      <h1>MESSAGES</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => (
            <div className="card" key={element._id}>
              <div className="details">
                <p>
                  First Name: <span>{element.firstName}</span>
                </p>
                <p>
                  Last Name: <span>{element.lastName}</span>
                </p>
                <p>
                  Email: <span>{element.email}</span>
                </p>
                <p>
                  Phone: <span>{element.phone}</span>
                </p>
                <p>
                  Message: <span>{element.message}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Messages</h1>
        )}
      </div>
    </section>
  );
}

export default Messages;


