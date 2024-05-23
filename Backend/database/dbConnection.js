// import mongoose from "mongoose";

// const dbConnection = ()=>{

// mongoose.connect(process.env.MONGO_URI,{
//     dbname: " MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
// }).then(()=>{
//     console.log("Database connected successfully");
// }).catch((err)=>{
//     console.log(`Some error occured ${err}`);
// })
// }
// export default dbConnection;

import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM" // Remove the extra space before the namespace
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log(`Some error occurred ${err}`);
    });
};

export default dbConnection;
