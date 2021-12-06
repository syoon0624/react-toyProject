var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
