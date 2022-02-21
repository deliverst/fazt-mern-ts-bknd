import {Schema, model} from 'mongoose'

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, {
    versionKey: false, // quita la propiedad de __v del clasico de mongoose
    timestamps: true //con esto crea 2 campos cuando es actualizado y cuando es creado
})

export default model('Video', videoSchema)