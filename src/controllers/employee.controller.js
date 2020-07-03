const getEmployeeList = async (req, res, service) => {
    try {
        let employees;
        if (req.query.id) {
            const id = req.query.id;
            employees = await service.getEmployeeById(id)
        } else if (req.query.pageNo && req.query.rowPage) {
            employees = await service.getAllEmployeePaging(req.query.pageNo, req.query.rowPage);
        } else {
            employees = await service.getAllEmployee();
        }
        res.send(employees);
    } catch (e) {
        res.sendStatus(500);
    }
};

module.exports = {
    getEmployeeList
};