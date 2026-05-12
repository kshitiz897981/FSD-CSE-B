require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000||process.env.PORT

const githubData={
  "login": "kshitiz897981",
  "id": 188855554,
  "node_id": "U_kgDOC0G1Ag",
  "avatar_url": "https://avatars.githubusercontent.com/u/188855554?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kshitiz897981",
  "html_url": "https://github.com/kshitiz897981",
  "followers_url": "https://api.github.com/users/kshitiz897981/followers",
  "following_url": "https://api.github.com/users/kshitiz897981/following{/other_user}",
  "gists_url": "https://api.github.com/users/kshitiz897981/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kshitiz897981/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kshitiz897981/subscriptions",
  "organizations_url": "https://api.github.com/users/kshitiz897981/orgs",
  "repos_url": "https://api.github.com/users/kshitiz897981/repos",
  "events_url": "https://api.github.com/users/kshitiz897981/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kshitiz897981/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kshitiz Varshney",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-18T11:06:40Z",
  "updated_at": "2025-09-22T09:22:53Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send("kshitiz")
})

app.get('/login',(req,res)=>{
   res.send('<h1>Login required</h1>')
})

//response in json format//
app.get('/github',(req,res)=>{
   res.json(githubData)
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id: 1,
            title:'a joke',
            content:'first joke'
        },
        {
            id: 2,
            title:'another joke',
            content:'second joke'
        },
        {
            id: 3,
            title:'another joke',
            content:'third joke'
        }
    ]
   res.json(jokes)
})


//here server will run on the port defined in the .env file//
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})