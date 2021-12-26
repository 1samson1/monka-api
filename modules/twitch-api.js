import fetch from 'node-fetch'

const rootUrl = "https://api.twitch.tv/helix"

let clientId
let accessToken

export default {
    setTokens(client,access){
        clientId = client
        accessToken = access
    },

    get(path, options) {
        return request('GET', path, options);
    },

    post(path, options) {
        return request('POST', path, options);
    },

    put(path, options) {
        return request('PUT', path, options);
    },

    patch(path, options) {
        return request('PATCH', path, options);
    },

    delete(path, options) {
        return request('DELETE', path, options);
    },
}

function request(method, path, options = {}){
    const url = options.url || rootUrl + path

    const opts = {
        method,
        headers: {
            'Client-Id': clientId,
            Authorization: `Bearer ${accessToken}`,
        }
    }

    if(options.body){
        opts.body = options.body
    }

    return fetch(url, opts).then(res => res.json())
}