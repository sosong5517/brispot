const logEvent = require('../events/myEmitter');
const Employee = require('../models/employee.model');


class EmployeeService {
    async getAllEmployee() {
        let result;
        try {
            result = await Employee.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getAllEmployeePaging(offset, limit) {
        let result;
        try {
            
            result = await Employee.findAndCountAll({offset: Number(offset), limit: Number(limit)});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}

module.exports = EmployeeService;