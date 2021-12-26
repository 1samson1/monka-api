import { Router } from "express";

const router = Router()

router.get('/twitch/global', function(req, res){
    req.twitchApi.get('/chat/emotes/global')
        .then(data => res.json(data))
})

export default router