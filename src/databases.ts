import mongoose from 'mongoose'
import config from './config'


(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONO_HOST}/${config.MONO_DATABASE}`)
        console.log('connected database', db.connection.name)
    }  catch (e) {
        console.error(e)
    }
})()


//
// const configMongoose = {
//  useUndefinedTopology: true,
//  useNewUrlParser: true,
//  };