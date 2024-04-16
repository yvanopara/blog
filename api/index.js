import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import http from 'http';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}`});
 mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log('Mongoose is connected');
}
).catch((error) => {
    console.log(error);
})

const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

server.listen (3000, () => {
    console.log(process.env.NODE_ENV)
    console.log('server listening on port 3000')
});


// app.use((err,req,res,next) =>{
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'internal server error';
//     res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message
//     })
// })

