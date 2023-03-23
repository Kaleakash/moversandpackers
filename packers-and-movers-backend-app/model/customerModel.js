const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Student Schema      
const customerSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    fname:{                                      
        type:String,
        required:true
    },
    lname:{                                      
        type:String,
        required:false
    },
    phonenumber:{                                      
        type:String,
        required:true
    },
    email:{                                      
        type:String,
        required:true,
        unique:true
    },
    password:{                                   
        type:String,
        required:true
    },
    typeofuser:{                                  
        type:String,
        required:true
    }
});

// exports customer
const Customer=mongoose.model('Customer',customerSchema);
module.exports=Customer;