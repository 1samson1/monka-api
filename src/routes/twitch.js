import { Router } from "express"
import twitchApi from "../modules/twitch-api.js";


const router = Router()

router.route('/*')
    .get(function(req, res) {        
        twitchApi.get(req.originalUrl)
            .then(data => res.json(data))
    })
    .post(function(req, res) {
        twitchApi.post(req.originalUrl, {
            body: res.body
        }).then(data => res.json(data))
    })
    .put(function(req, res) {
        twitchApi.put(req.originalUrl, {
            body: res.body
        }).then(data => res.json(data))
    })
    .patch(function(req, res) {
        twitchApi.patch(req.originalUrl, {
            body: res.body
        }).then(data => res.json(data))
    })
    .delete(function(req, res) {
        twitchApi.delete(req.originalUrl)
            .then(data => res.json(data))
    })

export default router