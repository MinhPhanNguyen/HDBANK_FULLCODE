import {StatusCodes} from 'http-status-codes'
import ApiError from '~/utils/ApiError';

const joi = require('joi');

const createNew = async (req, res, next) => {
    const correctCondition = joi.object ({
        title: joi.string().required().min(3).max(50).trim().strict(),
        description: joi.string().required().min(3).max(256).trim().strict(),
    })

    try {
        // AbortEarly false to res validation mistakes
        await correctCondition.validateAsync(req.body, {abortEarly: false})
        next()

    } catch (error){
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
    }
}

export const userValidation = {
    createNew
}