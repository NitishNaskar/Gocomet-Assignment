const request = require("request");
const cheerio=require("cheerio");
const wenCrawler=require("../models/web_crawler");

module.exports.webvisiter=function(req,res){
    var options ={
        method: 'GET',
        url: req.body.url,
    };

    console.log("Visiting website ---> ",req.body.url);

    request(options, function (error, response, html) {
        if(error){
            console.log("Visiting website !! Error !---> ",);
        }

        const $ = cheerio.load(html);
        const links = $("a").map((i,link) => link.attribs.href).get();
        
        links.forEach(str => {
            if(str.length>8 && str.substring(0,8)=="https://"){
                const urlArray = str.split("?");
                console.log(urlArray[0]);
                wenCrawler.create({
                    webside: urlArray[0],
                    status: "pending"
                })
            }
        });
    });

    return res.redirect("/");
}