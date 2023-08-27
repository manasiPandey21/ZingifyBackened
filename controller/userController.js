const UserService = require('../services/userservices');
exports.createprofile = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { name, age, bio, interests, gender, mobile } = req.body;
        const response = await UserService.createprofileUser(name, age, bio, interests, gender, mobile);
        res.json({ status: true, success: "User Profile Created Successfully" })
    } catch (error) {
        console.log("---> err -->", err);
        next(error);
    }
}

