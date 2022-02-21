import app from './app'
import './databases'
import config from './config'


app.listen(config.PORT,()=>{
    console.log(`Server on port ${config.PORT}`)
})