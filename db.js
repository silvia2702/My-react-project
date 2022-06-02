let mongoose = require('mongoose');

const server = `mongodb+srv://tv-show-review-for-funsies:${process.env.PASSWORD}@cluster0.h31pg.mongodb.net/?retryWrites=true&w=majority`;

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
    mongoose.connect(server)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error: ', err)
        })
    }
}

module.exports = new Database()