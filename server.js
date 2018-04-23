var express = require('express');
var yakbak = require('./index.js');
var bodyParser = require('body-parser');
var mockRouter = require('./mock_router.js');

const app = express();
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(function (req, res, next) {
  console.log(req.body);
  if(req.path.includes('login')){
    res.cookie('isqftAuth', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6ImphcmVkcGFpZEBnbWFpbC5jb20iLCJpYXQiOiIxNTE2MTI3NzgxLjUzOTc4IiwianRpIjoiOTYzMzkwNmYtMDAwMS00YWY4LWEzNWUtYjU4NTI0OWZhYzNkIn0.xKBCDBQjc3mY4ytjC2FOk3EToiDxkNBDesLNhX1FPcwE4RY98yiIxvXm2LVhxT-1FLtdt3wF-sWWxHwh7uAe-g');
    res.redirect(302, 'http://adil.isqft.com:5076');
  }else {
    mockRouter(req.path)(req,res);
  }
});


app.listen(9999, function() {

  console.log('Mock server running on 9999');
})
