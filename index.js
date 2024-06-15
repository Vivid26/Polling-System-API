import dotenv from "dotenv";
dotenv.config();

import express from "express";
import swagger from 'swagger-ui-express';
import documentAPI from './swagger.json' assert {type: 'json'};
import optionRouter from "./src/features/Options/routes/options.routes.js"
import questionRouter from "./src/features/Questions/routes/questions.routes.js"
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.middleware.js"
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoutes.middleware.js"



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Polling System API Project!!");
});
app.use("/api/question", questionRouter);
app.use("/api/option", optionRouter);

//swagger tool used for API documentation
app.use("/polling-system-api-documentation", swagger.serve, swagger.setup(documentAPI));

//middlewares for customized error handling 
app.use(errorHandlerMiddleware);
app.use(invalidRoutesHandlerMiddleware);

export default app;