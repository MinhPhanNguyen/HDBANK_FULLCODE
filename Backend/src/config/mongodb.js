import { env } from '~/config/environment'

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require ('mongodb')

let trelloDatabaseInstance = null

//Init to connect to the server
const mongoClientInstace = new MongoClient(env.MONGODB_URI, {
    serverApi : {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const CONNECT_DB = async () => {
    process.env.MONGODB_URI
    //Call a connection
    await mongoClientInstace.connect();

    trelloDatabaseInstance = mongoClientInstace.db(env.DATABASE_NAME);
}

export const GET_DB = () => {
    if (!trelloDatabaseInstance) throw new Error('Connect to db, please!')
    return trelloDatabaseInstance;
}

export const CLOSE_DB = async () => {
    await mongoClientInstace.close();
}