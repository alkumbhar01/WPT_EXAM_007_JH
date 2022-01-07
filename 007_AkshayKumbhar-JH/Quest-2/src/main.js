const express= require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const {sendmsg, showmsg} = require("./user");

//http://localhost:5002/send
app.post("/send", async(req, res)=>{
    const user = req.body;
    await sendmsg(user);
    res.json(user);
});
// http://localhost:5002/show
app.get("/show", async(req, res)=>{
    const list = await showmsg();
    res.json(list);
});

app.listen(5002,()=>console.log("Server Connected"));
