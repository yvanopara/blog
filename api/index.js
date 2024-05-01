import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';



const app= express();

const port = 3000;

 mongoose.connect('mongodb+srv://yvanopara:BMnf15FKWi8B4mKU@cluster0.tnq0hzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log('Mongoose is connected');
}
).catch((error) => {
    console.log(error);
})


app.use(cors(""));

app.use(express.json());
app.listen (port, () => {
    console.log(`server listening on port ${port}`)
});


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internallll server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

