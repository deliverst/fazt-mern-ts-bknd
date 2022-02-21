import dotenv from 'dotenv'
dotenv.config()

// console.log(process.env.HOLA)

export default {
    MONO_DATABASE: process.env.MONO_DATABASE ||'mern-typescrypt',
    MONO_USER: process.env.MONO_USER || 'user,',
    MONO_PASS: process.env.MONO_PASS || 'admin',
    MONO_HOST: process.env.MONO_HOST || 'localhost',
    PORT: process.env.PORT || 4000
}