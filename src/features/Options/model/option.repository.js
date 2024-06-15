import OptionModel from "./option.schema.js"
import { getQuestion } from "../../Questions/model/question.repository.js";

export const getTotalVotes = async (optionId) => {
    const option = await OptionModel.findById(optionId);
    return option.votes;
}

export const addVote = async (optionId) => {
    const option = await OptionModel.findById(optionId, "_id option votes");
    option.$inc("votes", 1);
    await option.save();
    return option;
}

export const edit = async (optionId, updateData) => {
    return await OptionModel.findByIdAndUpdate(optionId, updateData, {
        new: true,
        useFindAndModify: true,
    });
}

export const deleteById = async (optionId) => {
    const option = await OptionModel.findById(optionId);
    if (!option.votes) {
        await removeOptionFromQuestion(option, optionId);
        return await OptionModel.findByIdAndDelete(optionId);
    } else {
        return false;
    }
}

export const removeOptionFromQuestion = async (option, optionId) => {
    const question = await getQuestion(option.question);
    const index = (question.options).findIndex((option) => (option._id == optionId));
    if (index >= 0) {
        question.options.splice(index, 1);
        await question.save();
    }
    return;
};
