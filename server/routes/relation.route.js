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

// get friends focus column with_user_id
router.route('/friends/:id').get((req, res, next) => {
    relationSchema.find({ user_id: req.params.id }, (err, data) => {
        if (err) {
            return next(err);
        }else{
            console.log('not null', data);
            res.json(data);
        }
    })
})

// get friends focus column user_id
router.route('/friendswith/:id').get((req, res, next) => {

    relationSchema.find({ with_user_id: req.params.id }, (err, data) => {
        if (err) {
            return next(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

module.exports = router;
