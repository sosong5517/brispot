const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employee.route');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);

router.use('/employee', employeeRoutes);

router.use(noRoute);

module.exports = router;