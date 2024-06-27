import express from 'express';
import 'dotenv/config'

const app = express();

const jokes = [
    {
        id: 1,
        title: "1st Joke Title",
        content: "1st Joke Content"
    },
    {
        id: 2,
        title: "2nd Joke Title",
        content: "2nd Joke Content"
    },
    {
        id: 3,
        title: "3rd Joke Title",
        content: "3rd Joke Content"
    },
    {
        id: 4,
        title: "4th Joke Title",
        content: "4th Joke Content"
    },
    {
        id: 5,
        title: "5th Joke Title",
        content: "5th Joke Content"
    }
]

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})


app.listen(process.env.PORT , () => {
    console.log(`Listening on port ${process.env.PORT}`)
})