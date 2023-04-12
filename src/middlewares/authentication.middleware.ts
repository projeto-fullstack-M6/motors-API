import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  token = token!.split(" ")[1] || token;

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err, decoded: any) => {
      if (err || !decoded.isActive) {
        res.status(401).json({ message: "Unauthorized" });
      }

      req.user = {
        id: decoded.id,
        isAdm: decoded.isAdm,
        isBuyer: decoded.isBuyer,
      };

      next();
    }
  );
};
