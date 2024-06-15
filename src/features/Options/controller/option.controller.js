import { addVote, deleteById, edit, getTotalVotes } from "../model/option.repository.js";
import { customErrorHandler } from "../../../middlewares/errorHandler.middleware.js";

export const getTotalVotesForOption = async (req, res, next) => {
    const optionId = req.params.optionId;
    try {
        const votes = await getTotalVotes(optionId);
        if (votes) {
            res.status(200).json({ success: true, "Total votes": votes });
        } else {
            next(new customErrorHandler(404, "Please check again the option id."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while retrieving votes for a option."));
    }
}

export const addVoteForOption = async (req, res, next) => {
    const optionId = req.params.optionId;
    try {
        const option = await addVote(optionId);
        if (option) {
            res.status(200).json({ success: true, message: "Thanks for your vote.", result: option });
        } else {
            next(new customErrorHandler(400, "Please check again the option id."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while adding vote for a option."));
    }
}

export const editOption = async (req, res, next) => {
    const optionId = req.params.optionId;
    try {
        const option = await edit(optionId, req.body);
        if (option) {
            res.status(200).json({ success: true, message: "Option edited successfully.", result: option });
        } else {
            next(new customErrorHandler(400, "Please check again the option id."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while editing a option."));
    }
}

export const deleteOption = async (req, res, next) => {
    const optionId = req.params.optionId;
    try {
        const option = await deleteById(optionId);
        if (option) {
            res.status(200).json({ success: true, message: "Option deleted successfully." });
        } else {
            next(new customErrorHandler(400, "Please check again the option id. OR This option has voting so can't be deleted."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while deleting a option."));
    }
}
