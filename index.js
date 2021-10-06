const express = require('express');
const app = express();

const hour = new Date().getHours();
const day = new Date().getDay();
console.log(hour)
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    if (day >0 && day <6 && hour >7 && hour < 17) {
      next();
    } else {  
          res.sendFile(__dirname + '/public/closed.html')
    }
  });
 app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
 })


app.listen(3000,(error)=>{
    if (error) console.log('server failed')
    else console.log ('server is running on port 3000')
})
