import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/V1'
import 'dotenv/config'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'

const express = require('express')
const exitHook = require('async-exit-hook');

const START_SERVER = () => {
    const app = express()

    app.use(express.json())

    app.use('/v1', APIs_V1)

    app.use(errorHandlingMiddleware)

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`http://${ env.APP_HOST }:${ env.APP_PORT }/`)
    })

    exitHook(() => {
        CLOSE_DB()
    });
}

(async () => {
    try {
        await CONNECT_DB()
        console.log('Connect to db successfully')

        START_SERVER()
    }catch (error) {
        console.error('Error connecting to database:', error)
        process.exit(0)
    }
})()
