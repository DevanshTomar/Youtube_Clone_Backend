// require('dotenv').config({path: '../.env'})
import dotenv from 'dotenv'
import connnectDB from './db/index.js'

dotenv.config({ path: './env' })

connnectDB()


/*
import express from 'express'
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.error('Error occurred:', error);
            throw error;
        })
        app.listend(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        })
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
})()
*/