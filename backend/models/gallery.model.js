import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    imageUrl: {
        type: [String],
        required: true,        
    },
    cloudinaryId : {
        type: String,
        required: true,
    },
    title : {
        type : String,
        required : true
    },
    venue : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    headline : {
        type : String,
        required : true
    },
    videoUrl : {
        type : String
    }, 
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    } 
}, {timestamps : true});

export default mongoose.model("Gallery", gallerySchema);