import express from 'express'
const app = express()
import videosRouter from './routes/videos.routes'
import cors from 'cors'
import morgan from "morgan";

app.use(cors())
// app.use(morgan('env'))
app.use(morgan('combined'));
// para que pueda entender los objetos json, la tipica peticion post con un dato
app.use(express.json())

// para que cuando manden una peticion post desde un formulario podamos entenderlos desde ahi
app.use(express.urlencoded({extended: false}))

app.use(videosRouter)

export default app