import dotenv from 'dotenv'
import connnectDB from './db/index.js'

dotenv.config({ path: './env' })

connnectDB()
.then(() => {
    app.on('error', (error) => {
        console.log('ERROR connecting', error)
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER is RUNNIG at port: ${process.env.PORT}`)
    }) 
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err)
})

