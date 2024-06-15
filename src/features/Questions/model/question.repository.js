import QuestionModel from "./question.schema.js";
import OptionModel from "../../Options/model/option.schema.js";


export const getQuestion = async (questionId) => {
    return await QuestionModel.findById(questionId, "question options").populate("options", { _id: 1, option: 1, votes: 1, link_to_vote: 1 });
}

export const getAll = async (skip, pageSize) => {
    return await QuestionModel.find({}, "_id question options").populate("options", { _id: 1, option: 1, votes: 1, link_to_vote: 1 }).skip(skip).limit(pageSize);
}

export const getTotalCount = async () => {
    return await QuestionModel.find().count();
};

export const create = async (data) => {
    return await new QuestionModel(data).save();
}

export const createOption = async (questionId, data) => {
    const option = await new OptionModel(data).save();
    const question = await getQuestion(questionId);
    question.options.push(option._id);
    await question.save();

    return question.populate("options", { _id: 1, option: 1, votes: 1, link_to_vote: 1 });
}

export const edit = async (questionId, updateData) => {
    return await QuestionModel.findByIdAndUpdate(questionId, updateData, {
        new: true,
        useFindAndModify: true,
    });
}

export const deleteById = async (questionId) => {
    const question = await getQuestion(questionId);
    const votedOptions = question.options.length ? question.options.filter((option) => option.votes > 0) : [];
    if (!votedOptions.length) {
        await OptionModel.deleteMany({ question });
        return await QuestionModel.findByIdAndDelete(questionId);
    } else {
        return false;
    }
}
