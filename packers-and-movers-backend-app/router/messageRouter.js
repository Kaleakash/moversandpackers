const express=require('express');
const router=express.Router();
const messageController = require("../controller/messageController");

router.post("/store",messageController.storeMessage);
router.get("/findAllMessage",messageController.findAllMessage);
router.get("/findAllMessageByEmailId/:email",messageController.findMessageByEmailId);

// router.post("/login",studentController.login);
// router.get("/findStudentByEmail/:emailid",studentController.findStudentByEmailId);
// router.get("/findStudentById/:_id",studentController.findStudentById);
// router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
// router.put("/changePassword",studentController.changePassword);

module.exports=router;