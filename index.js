import express from "express"
import path, { dirname } from 'path'
import cors from 'cors'

import twitchMid from "./middleware/twitch.js"

import emotesRoutes from './routes/emotes.js'

const __dirname = path.resolve()

const PORT = process.env.PORT || 80
const app = express()

// Middleware
app.use(twitchMid)
app.use("/static", express.static(path.resolve(__dirname, 'static')))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/emotes", emotesRoutes)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
