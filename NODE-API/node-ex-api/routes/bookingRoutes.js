const express = require('express');
const router = express.Router();
const bookingController = require('../Controller/bookingController');

router.get('/', bookingController.message);
router.get('/read/:id', bookingController.get);
router.post('/create', bookingController.post);
router.put('/update/:id', bookingController.put);
router.delete('/delete/:id', bookingController.delete);

module.exports = router;


