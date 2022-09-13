const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection')

require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'))
    });
}

db.once('open', () => {
    app.listen(PORT, () => console.log(`Port started at ${PORT}`))
})