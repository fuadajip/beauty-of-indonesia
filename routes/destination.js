let express = require('express');
let router = express.Router();
let destinationController = require('../controllers/destination');

router.get('/', (req, res, next) => {
    res.send('Invalid endpoint');
});
router.post('/add', destinationController.addDestination);
router.get('/all', destinationController.getAll);

module.exports = router;