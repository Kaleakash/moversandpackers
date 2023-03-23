const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Quote Schema      
const quoteSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    fullname:{                                      
        type:String,
        required:true
    },
    email:{                                      
        type:String,
        required:true
    },
    phoneNumber:{                                      
        type:String,
        required:true
    },
    movingTo:{                                      
        type:String,
        required:true
    },
    movingFrom:{                                      
        type:String,
        required:true
    },
    movingDate:{                                      
        type:Date,
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
const Quote=mongoose.model('Quote',quoteSchema);
module.exports=Quote;