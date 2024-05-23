



// import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
// import ErrorHandler from "../middlewares/error.js";
// import Message from "../models/messageSchema.js";
// const sendMessage = catchAsyncErrors( async(req,res,next) => {
//     const{firstName,lastName,email,phone,message}= req.body;
//     if(!firstName || !lastName || !email || !phone || !message){
//        return next(new ErrorHandler("plz fill full form!",400));
//         }
    

//     await Message.create({firstName,lastName,email,phone,message});
//     res.status(200).json({
//         success : true,
//         message:"message send successfully",
//     })

// })
// export default sendMessage;

import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import Message from "../models/messageSchema.js";

const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Please fill out the entire form!", 400));
    }

    try {
        const newMessage = await Message.create({ firstName, lastName, email, phone, message });
        
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage // Optionally, you can send back the created message
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});

export default sendMessage;
