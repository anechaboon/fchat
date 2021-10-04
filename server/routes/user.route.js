let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// User Models
let userSchema = require('../models/User')

//create a new User
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

//read user
router.route('/').get((req, res) => {
    userSchema.find( (err, data) =>{
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

// Get Single User
router.route('/user-edit/:id').get((req, res) => {
    userSchema.findById( req.params.id, (err, data)=>{
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

// update user
router.route('/user-update/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate( req.params.id,  {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
            console.log(err);
        }else{
            res.json(data);
            console.log(data);
        }
    })
})

// delete user
router.route('/user-delete/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove( req.params.id, (err, data) => {
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.status(200).json({
                msg:data
            })
        }
    })
})


module.exports = router;
