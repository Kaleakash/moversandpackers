const express=require('express');
const router=express.Router();
const orderController = require("../controller/orderController");

router.post("/orderPlace",orderController.orderPlace);
//router.post("/login",studentController.login);
router.get("/findAllOrders",orderController.findAllOrders);
router.get("/findOrderByCustomer/:emailid",orderController.findOrdertByEmailId);

module.exports=router;