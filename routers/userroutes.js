const router = require('express').Router();
const UserController = require('../controller/userController');
const UserModel = require('../model/usermodel.js');

router.post('/createprofile', UserController.createprofile);

router.get('/getAll', async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/getDetails/:id', async (req, res) => {
    try{
        const data = await UserModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await UserModel.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UserModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


module.exports = router;
