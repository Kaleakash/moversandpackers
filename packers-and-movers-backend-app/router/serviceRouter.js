const express=require('express');
const router=express.Router();
const serviceController = require("../controller/serviceController");

router.post("/create",serviceController.createServie);
//router.post("/login",studentController.login);
router.get("/findAllService",serviceController.findAllService);
// router.get("/findStudentByEmail/:emailid",studentController.findStudentByEmailId);
// router.get("/findStudentById/:_id",studentController.findStudentById);
// router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
// router.put("/changePassword",studentController.changePassword);

module.exports=router;