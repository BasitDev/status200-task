const express = require('express');
const router = express.Router();
let users = require("../models/userSchema");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

// image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});
//img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowed"))
    }
}
var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

// register user 
router.post('/register', upload.single("image"), (req, res) => {
    console.log(req.body)

    // console.log(req.file.filename)
    const addUser = new users({
        image: req.file.filename,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        country: req.body.country,
        description: req.body.description
    });

    addUser
        .save()
        .then(() => res.json("new user added"))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});





//get user database
router.get("/getdata", async (req, res) => {

    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);

    } catch (error) {
        res.status(422).json(error)
    }

})

//get individual user information
router.get('/getuser/:id', async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userIndividual = await users.findById({ _id: id });
        console.log(userIndividual);
        res.status(201).json(userIndividual);

    } catch (error) {
        res.status(422).json(error.message);
    }
})


//update 
router.patch('/updateuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateUser);
        res.status(201).json(updateUser);


    } catch (error) {
        res.status(422).json(error);
    }
})

//delete

router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await users.findByIdAndDelete({ _id: id });
        console.log(deleteUser);
        res.status(201).json(deleteUser);


    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;