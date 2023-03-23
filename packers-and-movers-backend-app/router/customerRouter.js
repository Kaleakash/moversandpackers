const express=require('express');
const router=express.Router();
const customerController = require("../controller/customerController");

router.post("/create",customerController.createCustomer);
router.post("/login",customerController.login);
router.get("/findCustomerByEmail/:email",customerController.findCustomerByEmailId);
// router.get("/findAllStudent",studentController.findAllStudent);
// router.get("/findStudentById/:_id",studentController.findStudentById);
// router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
// router.put("/changePassword",studentController.changePassword);

module.exports=router;