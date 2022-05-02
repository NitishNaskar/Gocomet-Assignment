const mongoose = require('mongoose');

const webCrawlerSchema = new mongoose.Schema({
    webside: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    title: {
        type: String, 
    },
    meta:{
        type: String,
    },
    creator: {
        type: String, 
    },
    details: {
        type: String, 
    },
    image: [
        {
            type: String
        }
    ]
},{
    timestamps: true
});

const webCrawler = mongoose.model('Comment', webCrawlerSchema);
module.exports = webCrawler;