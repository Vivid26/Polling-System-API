import { create, createOption, deleteById, edit, getAll, getQuestion, getTotalCount } from "../model/question.repository.js";
import { customErrorHandler } from "../../../middlewares/errorHandler.middleware.js";


export const getQuestionById = async (req, res, next) => {
    const { questionId } = req.params;

    try {
        const question = await getQuestion(questionId);

        if (question) {
            res.status(200).json({ success: true, result: question });
        } else {
            next(new customErrorHandler(404, "Please check again the question id."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while retieving a question."));
    }
}


export const getAllQuestions = async (req, res, next) => {

    const { page, pageSize } = req.query;

    //pagination
    const pageNumber = parseInt(page) || 1;
    const skip = (pageNumber - 1) * pageSize;
    try {
        const questions = await getAll(skip, pageSize);
        const totalQuestions = await getTotalCount();


        if (questions.length) {
            res.status(200).json({
                success: true, result: {
                    totalQuestionsCount: totalQuestions,
                    totalPages: Math.ceil(totalQuestions / pageSize),
                    currentPage: page,
                    questions: questions
                }
            });
        } else {
            next(new customErrorHandler(404, "Oops! No questions in the database."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while retieving all questions."));
    }
}

export const createQuestion = async (req, res, next) => {
    try {
        const newQuestion = await create(req.body);
        if (newQuestion) {
            res.status(201).json({ success: true, message: "New question created successfully.", result: newQuestion })
        } else {
            next(new customErrorHandler(400, "Please check again the data provided by you while creating a question."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while creating a question."));
    }
}

export const createOptionForQuestion = async (req, res, next) => {
    const { questionId } = req.params;
    try {
        const question = await createOption(questionId, { question: questionId, ...req.body });
        if (question.options.length) {
            res.status(201).json({ success: true, message: "New option created successfully.", result: question })
        } else {
            next(new customErrorHandler(400, "Please check again the data provided by you while creating a option."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while creating a option for a question."));
    }
}

export const editQuestion = async (req, res, next) => {
    const { questionId } = req.params;

    try {
        const question = await edit(questionId, req.body);

        if (question) {
            res.status(200).json({ success: true, message: "Question edited successfully.", result: question });
        } else {
            next(new customErrorHandler(400, "Please check again the question id."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while editing a question."));
    }
}

export const deleteQuestion = async (req, res, next) => {
    const { questionId } = req.params;

    try {
        const question = await deleteById(questionId);
        if (question) {
            res.status(200).json({ success: true, message: "Question deleted successfully." });
        } else {
            next(new customErrorHandler(400, "Please check again the question id. OR Question can't be deleted if options voting present."));
        }
    } catch (error) {
        next(new customErrorHandler(500, "Internal Server error while deleting a question."));
    }
}