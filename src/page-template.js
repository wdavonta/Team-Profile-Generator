const fs = require('fs');
const Manager = require ('../lib/Manager');
const Engineer = require ('../lib/Manager');
const Intern = require ('../lib/Intern');


const generateCard = teamInfo => {

  


    const manager = teamInfo.manager.map (function(employee) {
        let managerHTML = `
        <div class ="">
        <h2>${employee.name}</h2>
        <h3>Manager</h3>
        <p>Id: ${employee.id}</p>
        <p>Email: <a href ="mailto:https://${employee.getEmail}()}</a></p>
        <p>Office Number: ${employee.officeNumber}</p>
        </div>
        `
        return managerHTML
    });

    const engineer = teamInfo.engineer.map (function(employee) {
        let engineerHTML = `
        <div class ="">
        <h2>${employee.name}</h2>
        <h3>Engineer</h3>
        <p>Id: ${employee.id}</p>
        <p>Email: <a href ="mailto:https://${employee.getEmail}()}</a></p>
        <p>Github: <a href="https://github.com/${employee.Github}">${employee.github}</a></p>
        </div>
        `
        return engineerHTML
    });

    const intern = teamInfo.intern.map (function(employee) {
        let internHTML = `
        <div class ="">
        <h2>${employee.name}</h2>
        <h3>Engineer</h3>
        <p>Id: ${employee.id}</p>
        <p>Email: <a href ="mailto:https://${employee.getEmail}()}</a></p>
        <p>School: ${employee.school}</p>
        </div>
        `
        return internHTML
})

return [manager, engineer, intern]


}


    
module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title> Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">Welcome Team</h1>
                    ${generateCard(templateData)}   
        </body> 
    </html>
`
}








