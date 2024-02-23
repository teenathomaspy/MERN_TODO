import mongoose from "mongoose";
const todo_schema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

const todo = mongoose.model('todos',todo_schema);
export default todo;