import { StatusCodes } from 'http-status-codes'

const joi = require('joi');

const createNew = async(req, res, next) => {
    const correctCondition = joi.object({
        cardNumber: joi.string().required().min(16).max(19).trim().strict(),
        cardHolderName: joi.string().required().min(3).max(50).trim().strict(),
    })

    try {
        console.log(req.body)

        await correctCondition.validateAsync(req.body, { abortEarly: false })

        res.status(StatusCodes.CREATED).json({ message: 'API get list card' });
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}

export const cardValidation = {
    createNew
}