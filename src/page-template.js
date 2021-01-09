const fs = require('fs');
const Manager = require ('../lib/Manager');
const Engineer = require ('../lib/Manager');
const Intern = require ('../lib/Intern');




const generateCard = responseInfo => {
    
     let data = '';

   responseInfo.forEach(teammember => { 
       const {name, id, email, position} = teammember;

    let employee = '';
    let teaminfo = '';

switch (position) {
    case 'Manager':
        employee = new Intern(name, id, email, school);
        teaminfo = employee.getSchool();
        break;
    case 'Engineer':
        employee = new Engineer(name, id, email, gitHub);
        teaminfo = employee.getGithub();
        break;
    case 'Mangager':
        employee = new Manager(name, id, email, officeNumber);
        teaminfo = employee.getofficeNumber();
        break;

};

   });
   return data;

};

const generatePage = (responseData) => {
    


    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet" href=".style.css"/>
            <title> Team Profile Generator</title>
        </head>
        <body>
            <header>
                <div class="container">
                    <div class="row">
                    <div class ="col-12">
                        <h1>Welcome Team</h1>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div class ="col s12 m4 l4 xl3">
                    ${generateCard(responseData)}
                </div>
            </section>
        </body>
    </html>
`
}

module.exports = generatePage;




