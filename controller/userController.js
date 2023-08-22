const UserService=require('../services/userservices');
exports.profile=async(req,res,next)=>{
    try{
       const {name,age,bio,interests,gender,mobile}=req.body;
       const successProfileCreation=await UserService.userProfile(name,age,bio,interests,gender,mobile);
       res.json({status:true,success:"User Profile Created Successfully"})
    }catch(error){
        throw error;
    }
}