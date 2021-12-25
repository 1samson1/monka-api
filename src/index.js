import express from "express"
import channelRoutes from './routes/twitch.js'

const PORT = process.env.PORT || 80
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(channelRoutes)


app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
