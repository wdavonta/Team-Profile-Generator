const inquirer = require ('inquirer');
const fs = require ('fs');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile} = require ('./utlis/generate-site');

let manager = [];
let intern = [];
let engineer = [];
let team =[];

let employeeArr = {manager, intern, engineer};

// const team = [];

const promptUser = () => {
return inquirer
    .prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is your id?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is your position?',
        choices: ['Intern', 'Manager', 'Engineer']
    }])
    .then(({name, id , email, position}) => {

        //  See what type of OBJECT we need to create
        if (position === "Manager") {
            // call our createManager() function
            createManager(name, id ,email)
        } 

        if (position === "Engineer") {
            // call our createManager() function
            createEngineer(name, id ,email)
        }

        if (position === "Intern") {
            // call our createManager() function
            createIntern(name, id ,email)
        }
        
    });
}

function createManager(name, id, email) {


    // Prompt for that extra peice of data BEFORE we create the new OBJECT 
    inquirer.prompt([
        {
            type: 'text',
            name: 'officenumber',
            message: 'What is your office number?'
        }
    ])
    .then(({officenumber}) => {
        // verify the data the User entered
        console.log(officenumber);
        // Create our new OBJECT
        var newManager = new Manager(name, id, email, officenumber);
        // verify 
        console.log(newManager);
        // Add our new OBJECT to our TEAM array
        team.push(newManager);

       
        inquirer.prompt({
            type: 'list',
            name: 'addPerson',
            message: 'Would you like to add another person?',
            choices: ['Yes', 'No']
        }).then(({addPerson}) => {
            // Conditional Test
            if(addPerson == 'Yes') {
                promptUser();
            } else {
                // Run our buildTeam function -> Create our HTML Template
                buildTeam();
            }
        })
    });
}

// Create our Engineer OBJECT
function createEngineer(name, id, email) {
    inquirer.prompt ([
        {
            type: 'text',
            name: 'Github',
            message:'What is your Github?'
        }
    ])

    .then(({Github}) => {

        var newEngineer = new Engineer(name, id, email, Github);

        team.push(newEngineer);

        inquirer.prompt({
            type: 'list',
            name: 'addPerson',
            message: 'Would you like to add another person?',
            choices: ['Yes', 'No']
        }).then(({addPerson}) => {

            if(addPerson == 'Yes') {
                promptUser();
            } else {
                buildTeam();
            }
        })
    });
}
        

// Create our Intern OBJECT
function createIntern(name, id, email) {

    inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: 'What school did you attend?'
        }
    ])
    .then(({school}) => {
        
        var newIntern = new Intern(name, id, email, school);
        team.push(newIntern);

        inquirer.prompt({
            type: 'list',
            name: 'addPerson',
            message: 'Would you like to add another person?',
            choices: ['Yes', 'No']
        }).then(({addPerson}) => {
            if(addPerson == 'Yes') {
                promptUser();
            } else {
                buildTeam();
            }
        })
    });
    }


     const buildTeam = () => {
//         fs.writeFile('./dist/teamFile.html', generatePage, err =>  {
//             if (err) { throw err;
//         };
//         console.log('File Created');
    
//     });
 }



 promptUser()
    .then(fileData => {
        return generatePage(employeeArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
.catch(err => {
console.log(err);
});