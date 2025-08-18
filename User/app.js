const express=require ('express');
const userRoutes=require('./routes/userRoutes');
const app=express();

app.use(express.json());

app.use('/api/userRoutes', require('./routes/userRoutes'));

app.listen(3000, ()=>{
    console.log('Server is running on port: http://localhost:3000');
});