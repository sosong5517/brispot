const connection = require('./dbConn');
const Employee = require('./src/models/employee.model');

async function migration() {
  
    await connection.sync({force: true});
    await Employee.create(
            {NIK: '44910s', Name:'pak eko'}
         )

   
}

migration();