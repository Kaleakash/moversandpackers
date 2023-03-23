const express=require('express');
const router=express.Router();
const quoteController = require("../controller/quoteController");

router.post("/store",quoteController.quoteStore);
router.get("/findAllQuote",quoteController.findAllQuoteRequest);
//router.get("/findAllMessageByEmailId/:email",messageController.findMessageByEmailId);

// router.post("/login",studentController.login);
// router.get("/findStudentByEmail/:emailid",studentController.findStudentByEmailId);
// router.get("/findStudentById/:_id",studentController.findStudentById);
// router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
// router.put("/changePassword",studentController.changePassword);

module.exports=router;