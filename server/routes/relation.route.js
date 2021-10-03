let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Relation Models
let relationSchema = require('../models/Relation')

//create a new Relation
router.route('/create-relation').post((req, res, next) => {

    relationSchema.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.json(data);
        }
        console.log('log req',req);

    })
})

//read user
router.route('/').get((req, res) => {
    relationSchema.find( (err, data) =>{
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
    relationSchema.findById( req.params.id, (err, data)=>{
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
    relationSchema.findByIdAndUpdate( req.params.id,  {
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
    relationSchema.findByIdAndRemove( req.params.id, (err, data) => {
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
