const express = require('express');
const router = express.Router();
const EmployeeService = require('../services/employee.service');
const {getEmployeeList} = require("../controllers/employee.controller");
//const tokenValidation = require('../middlewares/token-validation');

const employeeService = new EmployeeService();

//router.use(tokenValidation);
router.get('/', (req, res, next) => getEmployeeList(req, res, employeeService));

module.exports = router;