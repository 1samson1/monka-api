import { Router } from "express";

const router = Router()

router.get('/search/', function(req, res){
    req.twitchApi.get(`/users/${req._parsedUrl.search}`)
        .then(data => res.json(data))
})

export default router
