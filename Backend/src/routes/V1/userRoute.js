import {StatusCodes} from 'http-status-codes'
import { userValidation } from '~/validations/userValidation'
import { userController } from '~/controllers/userController'

const express = require('express')
const Router = express.Router();

Router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({ message: 'API get list user' });
    })
    .post(userValidation.createNew, userController.createNew)

export const userRoute = Router