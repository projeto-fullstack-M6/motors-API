import { Request, Response, NextFunction } from "express"


const serializerDataIsValidMiddleware = (schema: any) => async(req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        req.body = validatedData
        return next()
    } catch (error: any) {
        return res.status(400).json({
            error: error.errors
        })
    }
}

export default serializerDataIsValidMiddleware