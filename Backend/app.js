import express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";

import cors from "cors";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointRouter from "./router/appointmentRouter.js";

const app = express(); 
config({path:"./config/config.env"});

// app.use(cors({
//    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
//    methods:["GET","PUT","DELETE","POST"],
//    credentials: true 
// }));

app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true 

}));

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));

app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appointRouter);

dbConnection();
export default  app;

// // import express from "express";
// // import { config } from "dotenv";
// // import cookieParser from "cookie-parser";
// // import fileUpload from "express-fileupload";
// // import dbConnection from "./database/dbConnection.js";
// // import cors from "cors";
// // import messageRouter from "./router/messageRouter.js";
// // import userRouter from "./router/userRouter.js";

// // const app = express(); 
// // config({ path: "./config/config.env" });

// // // CORS middleware
// // // app.use(cors({
// // //     origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
// // //     methods: ["GET", "POST", "PUT", "DELETE"],
// // //     credentials: true
// // // }));
// // app.use(cors({
// //     origin:[process.env.FRONTEND_URL,process,process.env.DASHBOARD_URL],
// //     methods:["GET","POST","PUT","DELETE"],
// //     credentials:true
// // }))
// // app.use(cookieParser());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// // app.use(fileUpload({
// //     useTempFiles: true,
// //     tempFileDir: "/tmp/"
// // }));

// // app.use("/api/v1/message", messageRouter);
// // app.use("/api/v1/user", userRouter);

// // dbConnection();

// // export default app;

// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import fileUpload from "express-fileupload";
// import { errorMiddleware } from "./middlewares/error.js";
// import messageRouter from "./router/messageRouter.js";
// import userRouter from "./router/userRouter.js";
// import appointmentRouter from "./router/appointmentRouter.js";

// const app = express();
// config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );
// app.use("/api/v1/message", messageRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

// dbConnection();

// app.use(errorMiddleware);
// export default app;