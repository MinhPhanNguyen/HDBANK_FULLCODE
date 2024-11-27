import {StatusCodes} from 'http-status-codes'
import { userValidation } from '~/validations/userValidation'

const express = require('express')
const Router = express.Router();

Router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({ message: 'API get list user' });
    })
    .post(userValidation.createNew)

export const userRoute = Router