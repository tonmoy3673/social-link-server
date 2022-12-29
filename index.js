import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import AuthRoute from './Routes/AuthRoute.js'
// import UserRoute from './Routes/UserRoute.js'
// import PostRoute from './Routes/PostRoute.js'


const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();


mongoose
  .connect(process.env.MONGO_DB,{useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Connected with ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

  


  
//   app.use('/auth', AuthRoute)
//   app.use('/user', UserRoute)
//   app.use('/post', PostRoute)