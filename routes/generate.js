var express = require('express');
var router = express.Router();
const RandExp = require('randexp');

router.get('/', function(req, res, next) {
  const re = /^[1-9][AC-HJKMNP-RT-Y]([AC-HJKMNP-RT-Y]|[0-9])[0-9][AC-HJKMNP-RT-Y]([AC-HJKMNP-RT-Y]|[0-9])[0-9][AC-HJKMNP-RT-Y][AC-HJKMNP-RT-Y][0-9][0-9]$/
  const mbi = new RandExp(re).gen();
  res.json({ mbi: mbi });
});


module.exports = router;
