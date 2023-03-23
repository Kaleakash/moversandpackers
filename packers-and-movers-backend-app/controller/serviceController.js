let serviceModel = require("../model/serviceModel");

let mongoose = require('mongoose'); 
let Schema = mongoose.Types; 
let ObjectId = Schema.ObjectId

module.exports.createServie = async function(req, res){
    let service = req.body;
    
    try{
        let result = await serviceModel.insertMany(service)
    if(result){
        return res.status(200).json({
            message:"Service details stored successfully",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err
        });
    } 
}

module.exports.findAllService = async function(req, res){
    try{
        let result = await serviceModel.find({})
    if(result){
        return res.status(200).json({
            message:"All Service records are",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err
        });
    } 
}

// module.exports.findStudentByEmailId = async function(req, res){
//     let studentEmail = req.params.emailid;
//     try{
//         let result = await studentModel.find({emailid:studentEmail})
//     if(result.length!=0){
//         return res.status(200).json({
//             message:"Student Record is",
//             data:result
//             });        
//     }else {
//         return res.status(200).json({
//             message:"There is no record with emailid "+studentEmail
//             });
//     }   
//     }catch(err){
//         return res.status(500).json({
//             message: 'OOPS!! Error '+err.writeErrors
//         });
//     } 
// }

// module.exports.findStudentById = async function(req, res){
//     let studentId = req.params._id;
//     try{
//         let result = await studentModel.findOne({_id:studentId})
//     if(result!=null){
//         return res.status(200).json({
//             message:"Student Record is",
//             data:result
//             });        
//     }else {
//         return res.status(200).json({
//             message:"There is no record with id as "+studentId
//             });
//     }   
//     }catch(err){
//         return res.status(500).json({
//             message: 'OOPS!! Error '+err.writeErrors
//         });
//     } 
// }

// module.exports.deleteStudentById = async function(req, res){
//     let studentId = new ObjectId(req.params._id);
//     try{
//         let result = await studentModel.deleteOne({_id:studentId})
//     if(result.deletedCount>0){
//         return res.status(200).json({
//             message:"Student Record deleted succesfully"
//             });        
//     }else {
//         return res.status(200).json({
//             message:"There is no record present"
//             });
//     }   
//     }catch(err){
//         return res.status(500).json({
//             message: 'OOPS!! Error '+err
//         });
//     } 
// }

// module.exports.changePassword = async function(req, res){

//     let student = await studentModel.findOne({emailid:req.body.emailid});
//     if(student){
    
//         if(student.password==req.body.password){
        
//             return res.status(200).json({
//                 message: "Password didn't update new password and old password are same"
//             });

//              }else {
//     let result = await studentModel.updateOne({emailid:req.body.emailid},{$set:{password:req.body.password}})
//                     return res.status(200).json({
//                         message: "Password change successfully"
//                     });
//             }
     

//     }else {
       
//         return res.status(200).json({
//             message: "Record not present"
//         });

//     }
// }

// //Login for Student using email and password
// module.exports.login = async function(req, res){
//     if(req.body.emailid==undefined || req.body.password==undefined || req.body.typeofuser==undefined){
//         return res.status(201).json({
//             message:"Incomplete data provided"
//             });
//         }
         

//     try{
//         let student = await studentModel.findOne({emailid:req.body.emailid});
//         console.log(student);
//         if(student){
//             let pass = req.body.password;
//             let pwdDb = student.password;
//             if(pass==pwdDb){
//                 return res.status(200).json({
//                     message:"Succesfully login by Student!",
//                     data:student
//                     });
//             }
//         }
//         return res.status(201).json({
//             message:"Invalid emailid/password"
//             });
          
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({
//             message: 'OOPS!! Error'
//         });
//     }
// }