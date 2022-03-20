var express = require('express');
var router = express.Router();

router.post("/", function(req, res, next) {
  const mbi = req.body.mbi;
  const re = /^[1-9][AC-HJKMNP-RT-Y]([AC-HJKMNP-RT-Y]|[0-9])[0-9][AC-HJKMNP-RT-Y]([AC-HJKMNP-RT-Y]|[0-9])[0-9][AC-HJKMNP-RT-Y][AC-HJKMNP-RT-Y][0-9][0-9]$/
  const verification = re.test(mbi.toUpperCase());

  res.end(verification.toString());
});


module.exports = router;
