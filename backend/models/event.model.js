 import mongoose from "mongoose";

 const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    cloudinaryId : {
        type: String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    venue : {
        type : String,
        required : true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    } 
 },{timestamps:true});

export default mongoose.model("Event", eventSchema);