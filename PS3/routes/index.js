var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS3' });
});

router.get('/ps3', function(req, res, next){
    res.render(
        '400ps3',{
            course: 'CS400',
            professor: 'Donham',
        }
    )
})

router.post('/ps3', (req, res, next) => {
    let {studentname} = req.body;
    let studentgrade = req.body.studentgrade;
    res.render(
        '400ps3', { studentname, studentgrade
        }
    )
})

module.exports = router;
