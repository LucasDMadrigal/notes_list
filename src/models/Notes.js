const {Schema, model} = require('mongoose')

const NotesSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type: String,
        required: true
    },
},{
    timestamps : true
})

module.exports = model('Notes', NotesSchema)