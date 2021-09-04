const mongoose = require('mongoose');

function Conn(){
  mongoose.connect(`mongodb+srv://paulohenriquehenrique:uN4g6pSE0uRAqPK6@cluster0.al6x7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  ).then(() => {
    console.log("MongoDB connected!!")
  }).catch(err => console.error(err));
}

module.exports = Conn;