
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const data = require('./model/model')

app.use(cors())

router.get("/quiz",(req,res,next)=>{
   
 
   res.json(data.data)
   next()

})

app.use("/", router);

app.listen(6969);