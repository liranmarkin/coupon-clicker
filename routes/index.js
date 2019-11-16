var express = require('express');
var router = express.Router();

// format [{code, url}, {code, url}, ...]
coupons = []

function saveCoupons(couponsList) {
    coupons = Array.from(couponsList);
}

function popCoupon() {
    return coupons.pop();
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});

/* GET click. */
router.get('/click', function(req, res, next) {
    coupon = popCoupon();
    res.render('click', coupon);
});

router.post('/coupon', function(req, res, next) {
    // TODO: add copouns
    console.log(req.body);
    res.send(200);
});

module.exports = router;
