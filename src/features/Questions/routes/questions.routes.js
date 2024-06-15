import express from "express";
import { createOptionForQuestion, createQuestion, deleteQuestion, editQuestion, getAllQuestions, getQuestionById } from "../controller/question.controller.js";

const questionRouter = express.Router();


questionRouter.route('/get/:questionId').get(getQuestionById);
questionRouter.route('/get-all').get(getAllQuestions);

questionRouter.route('/create').post(createQuestion);
questionRouter.route('/create-option/:questionId').post(createOptionForQuestion);

questionRouter.route('/edit/:questionId').put(editQuestion);

questionRouter.route('/delete/:questionId').delete(deleteQuestion);


export default questionRouter;