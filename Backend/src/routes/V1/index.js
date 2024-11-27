import { StatusCodes } from 'http-status-codes'
import { userRoute } from '~/routes/V1/userRoute'

const express = require('express')
const Router = express.Router();

Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'APIs V1 ready to use' });
})

Router.use('/user', userRoute)

export const APIs_V1 = Router