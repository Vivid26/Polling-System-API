import mongoose from "mongoose";

//defining Question schema
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Option"
        }
    ]

})

//defining Question model 
const QuestionModel = mongoose.model("Question", questionSchema);

export default QuestionModel;