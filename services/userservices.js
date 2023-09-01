const UserModel = require('../model/usermodel');

class UserService {
    static async createprofileUser(fid, name, age, bio, interests, gender, mobile) {
        try {
            console.log(name, age);
            const createUser = new UserModel({fid, name, age, bio, interests, gender, mobile });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }
    static async getUserDetails(userId) {

        const userdetails = await UserModel.find({ userId });
        return userdetails;

    }
    
}

module.exports = UserService;