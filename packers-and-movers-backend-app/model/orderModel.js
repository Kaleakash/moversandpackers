const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Quote Schema 
const quoteInfoSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    basePrice:{                                      
        type:Number,
        required:false
    },
    itemName:{                                      
        type:String,
        required:false
    },
    quantity:{                                      
        type:Number,
        required:false
    },
    serviceName:{                                      
        type:String,
        required:false
    },
    totalPrice:{
        type:Number,
        required:false
    }
    
})     
const orderSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    customerName:{                                      
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
        type:String,
        required:true
    },
    quoteInfo:{                                   
        type:[quoteInfoSchema],
        required:true
    }
});
// exports message
const Orders=mongoose.model('Order',orderSchema);
module.exports=Orders;