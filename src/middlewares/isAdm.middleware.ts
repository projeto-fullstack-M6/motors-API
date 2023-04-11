import { Request, Response, NextFunction } from "express";

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (!isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
