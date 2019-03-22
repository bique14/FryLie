const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000

const line = require('@line/bot-sdk')
const client = new line.Client({
  channelAccessToken: 'xxxx'
})

const firebase = require('firebase-admin')
const serviceAccount = require('./firebaseKey.json')
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://xxxx.firebaseio.com"
})
const database = firebase.database()
const ref = database.ref('users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  reply(reply_token, JSON.stringify(req.body.events), req.body.events)
  res.sendStatus(200)
})

app.listen(port)

function reply(reply_token, stringData, data) {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer xxxx'
  }

  client.getProfile(data[0].source.userId)
    .then((profile) => {
      const pro = {
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        status: profile.statusMessage
      }

      let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
          type: 'text',
          text: stringData
        }, {
          type: 'text',
          text: JSON.stringify(pro)
        }]
      })

      request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
      }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
      })

      var userRef = ref.child(`${data[0].source.userId}`)
      const save = {
        name: pro.displayName,
        _id: data[0].source.userId,
        profileUrl: pro.pictureUrl
      }
      save[`${data[0].timestamp}`] = {
        _id: data[0].message.id,
        time: data[0].timestamp,
        massage: data[0].message.text,
      }
      userRef.update(save)
    })
}