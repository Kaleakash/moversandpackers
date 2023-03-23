const express=require('express'); 
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const adminRouter = require("./router/adminRouter");
const customerRouter = require("./router/customerRouter");
const serviceRouter = require("./router/serviceRouter");
const messageRouter = require("./router/messageRouter");
const quoteRouter = require("./router/quoteRouter");
const orderRouter = require("./router/orderRouter");
const db = require("./config/dbConfig");

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.json({ type:"application/json" }));
app.use(cors());

// router middleware 
app.use("/api/admin",adminRouter);
app.use("/api/customer",customerRouter);
app.use("/api/service",serviceRouter);
app.use("/api/message",messageRouter);
app.use("/api/quote",quoteRouter);
app.use("/api/order",orderRouter);

app.listen(port,()=>console.log(`Server running on port ${port} number`));

