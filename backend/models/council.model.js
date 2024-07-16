import mongoose from "mongoose"

const teamMemberSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    team : {
        type : String,
        enum : ["Design", "Event", "Technical", "Data", "Finance", "Public Relation"]
    }
});


const councilSchema = new mongoose.Schema({
    president : {
        type : String,
        required : true
    },
    vicePresident : {
        type : String,
        required : true
    },
    secretary : {
        type : String,
        required : true
    }, 
    viceSecretary : {
        type : String,
        required : true
    },
    team : {
        type : String,
        enum : ["Design", "Event", "Technical", "Data", "Finance", "Public Relation"],
        required : true
    },
    teamMembers : {
        type : [teamMemberSchema],
        required : true
    }

}, {timestamps : true});

export default mongoose.model("Council", councilSchema);