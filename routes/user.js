const router = require("express").Router();

let User = require("../models/user");

router.route("/add").post((req,res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phoneNo = Number(req.body.phoneNo);

    const newUser = new User({
        first_name,
        last_name,
        phoneNo
    })

    newUser.save().then(()=>{
        res.json("User Added")
    })
    .catch((err)=> {
        console.log(err)
    })
})

router.route("/").get((req,res) => {
    User.find()
    .then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let id = req.params.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phoneNo = Number(req.body.phoneNo);

    const updateUser = {
        first_name,
        last_name,
        phoneNo
    }

    const update = await User.findByIdAndUpdate( id, updateUser)
    .then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err.message});
    });

})

router.route("/delete/:id").delete(async( req,res) => {
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"User Deleted Successfull!!"});

    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with user delete", error: err.message})
    })
})

router.route("/get/:id").get(async(req,res) => {
    let.userId = req.params.id;

    const User = await User.findById(userId)
    .then (() => {
        res.status(200).send({status:"User fatched", User: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: " Error with get user",error: err.message})
    })
})
module.exports = router;