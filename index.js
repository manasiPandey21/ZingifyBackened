const app = require('./app'); 
const port = 2500;
const db=require("./config/db");
const UserModel=require("./model/usermodel.js");
app.get('/', (req, res) => {
    res.send("Zingify");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
