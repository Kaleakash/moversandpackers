const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Student Schema      
const messageSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    name:{                                      
        type:String,
        required:true
    },
    email:{                                      
        type:String,
        required:true
    },
    phonenumber:{                                      
        type:String,
        required:true
    },
    subject:{                                      
        type:String,
        required:true
    },
    message:{                                   
        type:String,
        required:true
    },
    typeofuser:{                                  
        type:String,
        required:true
    }
});
// exports message
const Message=mongoose.model('Message',messageSchema);
module.exports=Message;