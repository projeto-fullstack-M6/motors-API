import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "./AppErrors";

export const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: JSON.parse(error.message),
    });
  }
  console.log(error)
  return res.status(500).json({
    message: error.message,
  });
};
