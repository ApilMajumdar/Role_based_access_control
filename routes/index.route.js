const router = require('express').Router();

router.get('/', (req, res, next) => {
  const user =req.body.name
  res.render('index');
});

module.exports = router;
