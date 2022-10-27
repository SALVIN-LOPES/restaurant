import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import foodRouter from './routes/foodRoutes.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/' , (req,res)=>{
  res.send("Hello to Restaurent API")
})

app.use("/user", userRouter);
app.use("/food",foodRouter);

const CONNECTION_URI = "mongodb://admin:admin@ac-uwqas80-shard-00-00.hs0nwpf.mongodb.net:27017,ac-uwqas80-shard-00-01.hs0nwpf.mongodb.net:27017,ac-uwqas80-shard-00-02.hs0nwpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-jsz6fl-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = 5000
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
