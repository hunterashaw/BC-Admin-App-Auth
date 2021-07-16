const server = require('express')()
const fetch = require('node-fetch')

server.use(require('express').json())

const client_id = '' // From developer portal
const client_secret = '' // From developer portal

const publicURL = '' // ngrok URL

server.get('/', async (req, res) => {
    last = req.query
    console.log(req.query)
    res.send('Thumbs up.')
    if (req.query.code && req.query.context && req.query.scope){

        // This is the step that tells BC to show app within admin section

        const request = await fetch(`https://login.bigcommerce.com/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${req.query.code}&scope=${req.query.scope}&grant_type=authorization_code&redirect_uri=${publicURL}&context=${req.query.context}`, {
            method:'post',
            headers:{
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log('Request sent to BC.', request.status, request.statusText)
    }
    
})

server.post('/', (req, res) => {
    console.log(req.body) // BC never responded here like it said it would
})

server.listen(3000)
console.log('Server started')