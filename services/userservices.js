const UserModel=require('../model/usermodel');

class UserService{
    static async userProfile(name,age,bio,interests,gender,mobile){
        try{
            const createUserProfile=new UserModel({name,age,bio,interests,gender,mobile});
            return await createUserProfile.save();
        }catch(err){
            throw err;
        }
    }
}
module.exports=UserService;