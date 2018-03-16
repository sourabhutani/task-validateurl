var express= require('express');
var app=express();

exports.validateUri = (req,res) => {
    var uri=req.params.uri-data;

console.log(uri);

    // User.findOne({email:email}).exec()
    // .then(function(user){
    //     var result = [];
    //     return UserInfo.findOne({email:user.email}).exec()
    //     .then(function(userInfo){
    //         return [user,userInfo];
    //     })
    // }).then(function(result){
    //     var userDetail=result[1];
    //     return UserEducation.find({email:userDetail.email}).exec()
    //     .then(function(userEducation){
    //         result.push(userEducation);
    //         return result;
    //     })
    // }).then(function(result){
    //     var user=result[0];
    //     var userInfo=result[1];
    //     var userEducation =result[2][0];
    //     var body = {email: user.email,
    //                 firstName: user.firstName,
    //                 lastName: user.lastName,
    //                 password: user.password,
    //                 phone_number: user.phone_number,
    //                 role: user.role,
    //                 address: userInfo.address,
    //                 city: userInfo.city,
    //                 landmark: userInfo.landmark,
    //                 state: userInfo.state,
    //                 country: userInfo.country,
    //                 pincode: userInfo.pincode,
    //                 education: userEducation.highest_education            
    //     }
    //     res.json({
    //         success: true,
    //         data:body
    //     })
    // })
}


//requesting for all the user details
// exports.getAllUser=(req,res)=>{
//     User.find( {},(error,response)=>{
//         if(error)
//             res.json({
//                 "status": "empty",
//                 "error": "404 Page Not Found"
//             });
//         // res.json(response);
//         res.json({
//             "status": true,
//             "respData": {
//                  response
//             }
//         }
//         )
//     });
// }