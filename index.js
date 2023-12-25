// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/main.html'));
// });

app.get('/',(req,res)=>{
  res.send("Hello world!");
});
app.get('/add',(res,req)=>{
  const { num1,num2 } = req.body;
  if(isNaN(num1) && isNaN(num2)){
    return res.send({
      status:'error',
      message:'Invalid data types'
    });
  }
  const sum = num1+num2;
  if(sum>100000){
    return res.send({
      status:'error',
      message:'Underflow'
    });
  }
  return res.send({
    status:'success',
    message:'the sum of given two numbers',
    sum:sum
  });

});
app.get('/subtract',(res,req)=>{
  const { num1,num2 } = req.body;
  if(isNaN(num1) && isNaN(num2)){
    return res.send({
      status:'error',
      message:'Invalid data types'
    });
  }
  const diff = num1-um2;
  if(diff < -100000){
    return res.send({
      status:'error',
      message:'Underflow'
    });
  }
  return res.send({
    status:'error',
    message: "the difference of given two numbers",  
    difference: num1-num2  
  });

});
app.get('/mutiply',(res,req)=>{
  const { num1,num2 } = req.body;
  if(isNaN(num1) && isNaN(num2)){
    return res.send({
      status:'error',
      message:'Invalid data types'
    });
  }
  const product = num1*num2;
 
  return res.send({
    status:'error',
    message: "The product of given numbers",  
    result: product 
  });

});
app.get('/subtract',(res,req)=>{
  const { num1,num2 } = req.body;
  if(isNaN(num1) && isNaN(num2)){
    return res.send({
      status:'error',
      message:'Invalid data types'
    });
  }
  
  if(num2 === 0){
    return res.send({
      status:'error',
      message:'Cannot divide by zero'
    });
  }
  const res = num1 / num2;
  if(res < -100000){
  return res.send({
    status:'error',
    message:'Underflow'
  })}
  return res.send({
    status:'error',
    message: "The division of given numbers",  
    difference: num1/num2  
  });

});

//your code here

module.exports = app;
