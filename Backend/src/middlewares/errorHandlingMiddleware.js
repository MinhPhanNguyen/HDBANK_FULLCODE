import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'

export const errorHandlingMiddleware = (err, req, res, next) => {

    if(!err.statusCodes) err.statusCodes = StatusCodes.INTERNAL_SERVER_ERROR

    const responseError = {
        statusCodes: err.statusCodes,
        message: err.message || StatusCodes[err.statusCodes],
        stack: err.stack
    }

    if (env.BUILD_MODE !== 'dev') delete responseError.stack

    res.status(responseError.statusCodes.json(responseError))
}   