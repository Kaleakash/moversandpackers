const mongoose = require('mongoose');
const loginModel = require("../model/adminModel");
const serviceModel = require("../model/serviceModel");

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://database:27018/movers-and-packers-db',{useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', async()=>{
    let admin = {"email":"admin@gmail.com","password":"admin@123","typeofuser":"admin"};
    let result = await loginModel.find({"email":"admin@gmail.com"});

    let service = [
        {title:`Home Shifting Service`,description:`We provide a safe and expert home moving services throughout India. We take care of each and every item such as fridge, washing machine, wardrobe, bed and fragile items carefully. Our main aim is to make household relocation hassle-free.
        `,filePath:`data:image/jpeg;base64,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`,
        items:[
            {itemName:"TV/LED/LCD",price:6},
            {itemName:"TV Trolly",price:3},
            {itemName:"Refregerator(Single Door)",price:3},
            {itemName:"Refregerator(Double Door)",price:4},
            {itemName:"Washing Machine",price:5},
            {itemName:"Sofa",price:6},
            {itemName:"Double Cot",price:3},
            {itemName:"Single Cot",price:5},
            {itemName:"Gas Stove",price:4},
            {itemName:"Micro Oven",price:3},
            {itemName:"Water filter",price:3},
            {itemName:"Show Case (Single)",price:3},
            {itemName:"Show Case (Double)",price:5},
            {itemName:"Water filter",price:2},
            {itemName:"Dish washer",price:3},
        ]},
        {title:`Office Shifting Service`,description:`Office or Corporate relocation is different from household shifting and requires skilled labour and planning before movement.We make office relocation process quick, safe, and secure because we understand the importance of each and every document and equipment that are kept in office.`,
        filePath:`https://media.istockphoto.com/id/638873722/vector/man-carry-boxes-with-his-work-moving-to-new-office.jpg?s=612x612&w=0&k=20&c=g-0j92WFbFWzGEN9mAgDpGmJLlw_NwU69oSZlwox_WI=`,
        items:[
            {itemName:"Chair (Plastic)",price:2},
            {itemName:"Chain (Wooden)",price:4},
            {itemName:"Table",price:5},
            {itemName:"Computer",price:6},
            {itemName:"Sofa",price:7},
            {itemName:"Double Cot",price:9},
            {itemName:"Single Cot",price:5},
            {itemName:"Gas Stove",price:3},
            {itemName:"Micro Oven",price:3},
            {itemName:"Water filter",price:3},
            {itemName:"Show Case (Single)",price:4},
            {itemName:"Show Case (Double)",price:5},
            {itemName:"Water filter",price:2},
            {itemName:"Dish washer",price:3}
        ]},
        {title:`Warehousing and Storage`,description:`Packers and Movers provides a  safe and secure warehousing and storage services. We provide a short-term and long-term storage services to our customers at just 99Rs/month. we provide the best equipment for any kind of storage at best price. Secure and safe storage is our guarantee at our warehouse. Our warehouse is under cctv surveillance, and 24/7 protected by our security guards.
        `,filePath:`https://i.pinimg.com/564x/08/83/9c/08839c977bc4c50a6087ccf7a6e5fd7c.jpg`
    ,
    "items":[
        {itemName:"Storage Cabinet",price:6},
        {itemName:"Pallet Racks",price:8},
        {itemName:"Selective Pallet Racking",price:7},
        {itemName:"Push-Back Pallet Racks",price:7},
        {itemName:"Motorized Mobile Pallet Rack,itemQuantity",price:15},
        {itemName:"Multi-tier Shelves",price:12},
        {itemName:"Mezzanine Flooring",price:7},
        {itemName:"Static Shelves",price:5},
        {itemName:"Mobile Shelves",price:4},
        {itemName:"Wire Partitions",price:6},
        {itemName:"Dock Equipment",price:10},
        {itemName:"Lifting Equipment",price:8},
        {itemName:"Packing Equipment",price:10}]}
    

    ]

    let result1 = await serviceModel.find({});
    if(result1.length==0){
        serviceModel.insertMany(service);
    }
    console.log(result);
    if(result.length==0){
        loginModel.insertMany(admin);
    }
    console.log('Connected to Database :: MongoDB');
});


function storeDefaultServiceInfo() {
    
}
module.exports = db;
