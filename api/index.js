import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';

mongoose.connect(process.env.MONGO)
.then(() =>{
    console.log('Mongoose is connected');
}
).catch((error) => {
    console.log(error);
})

const app= express();

app.listen (3000, () => {
    console.log('server listening on port 3000')
});

app.use('/api/user', userRoutes)
