let mongoose = require('mongoose');
const server = `mongodb+srv://isagiraffe79:${process.env.PASSWORD}@cluster0.h31pg.mongodb.net/test`;
const database = 'seriesreview';

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error: ', err)
        })
    }
}

module.exports = new Database()