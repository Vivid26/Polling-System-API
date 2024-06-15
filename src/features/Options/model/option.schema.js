import mongoose from "mongoose";

//defining Option Schema
const optionSchema = new mongoose.Schema({
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    option:{
        type:String,
        required: true
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String,
    },
})

// middleware to dynamically add link for voting
optionSchema.pre('save', async function (next) {
    this.link_to_vote = new URL(`${process.env.BASE_URL}/api/option/add-vote/${this._id}`);
    return next();
});

//creating Option Model
const OptionModel = mongoose.model("Option",optionSchema);

export default OptionModel;