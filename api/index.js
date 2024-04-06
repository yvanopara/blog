import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
 mongoose.connect('mongodb+srv://yvanopara:BMnf15FKWi8B4mKU@cluster0.tnq0hzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log('Mongoose is connected');
}
).catch((error) => {
    console.log(error);
})

const app= express();
app.use(express.json());

app.listen (3000, () => {
    console.log('server listening on port 3000')
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

