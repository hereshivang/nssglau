import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    imageUrls: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 5;
            },
            message: props => `At least 5 photos are required, but only ${props.value.length} were provided.`
        }
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
    }
}, {timestamps : true});

export default mongoose.model("Gallery", gallerySchema);