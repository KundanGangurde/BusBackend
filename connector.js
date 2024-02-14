const mongoose = require("mongoose")



function connector() {
  mongoose.connect("mongodb+srv://gangordaykondan:Kundanvg99@cluster0.0xqnlhm.mongodb.net/db?retryWrites=true&w=majority"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
   console.log("mongoose is live now")
}).catch((err)=>{
console.log({err})
})}

module.exports = connector
