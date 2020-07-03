const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Employee = connection.define('employee', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    NIK: {
        type: Sequelize.STRING
    },
    Name: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'employee',
    paranoid: true,
});

module.exports = Employee;