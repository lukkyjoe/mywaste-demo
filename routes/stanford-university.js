var express = require('express');
var router = express.Router();
const path = require('path')

/* GET stanford. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/stanford-university.html'));
});



module.exports = router;