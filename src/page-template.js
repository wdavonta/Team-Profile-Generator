const fs = require('fs');
const Manager = require ('../lib/Manager');
const Engineer = require ('../lib/Manager');
const Intern = require ('../lib/Intern');



const generateCard = (responseInfo) => {
    const team = responseInfo;
    let employee = '';


    if (responseInfo) {
        team.forEach(employee => {
            console.log(employee, employee.createEmployee());
            employee += employee.createEmployee();
        })
        return employee;
    }
}

function generatePage(responseInfo) {
    


    return`

`
};

module.exports = generatePage;




