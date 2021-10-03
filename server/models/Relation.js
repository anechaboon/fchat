const mongoose = require('mongoose')
const Schema = mongoose.Schema

let relationSchema = new Schema({
    user_id:{
        type: String
    },
    with_user_id:{
        type: String
    },
    
},{
    collection:"relations"
    
})

module.exports = mongoose.model('relation',relationSchema)