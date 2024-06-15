import { customErrorHandler } from "./errorHandler.middleware.js";

export const invalidRoutesHandlerMiddleware = (req, res, next) => {
    next(new customErrorHandler(404, JSON.stringify({ success: false, message: `API not found (${req.originalUrl}). Please check our documentation for more information at ${process.env.BASE_URL}/polling-system-api-documentation.` })));
};
  