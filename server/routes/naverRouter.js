const request = require('request');

//naverApi 정보
require('dotenv').config();

const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
let query = "test";
const url = `https://openapi.naver.com/v1/search/shop.json`;


//api 요청 옵션
const options = {
    url,
    headers: {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET
    },
}

//server api
var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())

/* GET users listing. */
router.get('/', function(req, response, next) {
    //api 요청 보낸 후, 콜백으로 결과 받기
    options.url = url + `?query=${encodeURI(req.query.query)}&start=${req.query.start}`;
    console.log(req.query);
    request.get(options, function(error, res, body) {
        if (!error && res.statusCode == 200) {
            //console.log(JSON.parse(body));
            response.send(JSON.parse(body));
        } else {
            console.log("error = " + res.statusCode);
        }
    });
});

router.get('/json', function(req, res, next) {
  res.send({ message: "This is Json Data" });
});

router.post('/post', function(req, res, next) {
  res.send({ message: "This is Json Data Call Post" });

});

router.post('/sendData', function(req, res, next) {
  console.log("REQUEST QUERY: ",req.query,"BODY: ", req.body);
  res.send("성공");
});

module.exports = router;