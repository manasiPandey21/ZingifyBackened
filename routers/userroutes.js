const router=require('express').Router();
const UserController=require("../controller/userController");

router.post('/createProfile',UserController.profile);

module.exports=router;