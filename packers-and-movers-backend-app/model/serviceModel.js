const mongoose=require('mongoose'); 
mongoose.pluralize(false);
const ItemsListSchema = new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    itemName:{
        type:String,
        require:true
    },
    price: {
        type:Number,
        required:true
    }
})
const serviceSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    title:{                                      
        type:String,
        required:true
    },
    description:{                                      
        type:String,
        required:true
    },
    filePath:{                                      
        type:String,
        required:true
    },
    items:[ItemsListSchema]
});

// exports student
const Service=mongoose.model('Service',serviceSchema);
module.exports=Service;