import twitchApi from '../modules/twitch-api.js'

export default function(req, res, next){
    twitchApi.setTokens(
        process.env.CLIENT_ID,
        process.env.ACCESS_TOKEN
    )

    req.twitchApi = twitchApi

    next()
}