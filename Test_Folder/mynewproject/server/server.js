const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {origin: 'http://localhost:3000'}
))                

require("./config/mongoose.config") //need to add config file
require('./routes/person.routes')(app);//adding routes to routes file
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})