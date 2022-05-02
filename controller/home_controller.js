const wenCrawler=require("../models/web_crawler");

module.exports.home=function(req,res){
    wenCrawler.find({}, function(err, urlArray){
        return res.render('index', {
            urlArray: urlArray
        });
    });
}