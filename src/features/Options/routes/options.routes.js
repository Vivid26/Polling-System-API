import express from "express";
import { addVoteForOption, deleteOption, editOption, getTotalVotesForOption } from "../controller/option.controller.js";

const optionRouter = express.Router();

optionRouter.route('/get-total-votes/:optionId').get(getTotalVotesForOption);

optionRouter.route('/add-vote/:optionId').post(addVoteForOption);

optionRouter.route('/edit/:optionId').put(editOption);

optionRouter.route('/delete/:optionId').delete(deleteOption);

export default optionRouter;