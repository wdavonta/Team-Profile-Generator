const inquier = require ('inquirer');

const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site')

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
        choices: ['Intern, Manager, Engineer']
    }])

    .then(({employee, id , email, position}) => {
        if (position === "Manager")
        return inquirer
    

    .prompt ([
    {
        type: 'text',
        name: 'officenumber',
       message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'addPerson',
        message: 'Would you like to add another person?',
        choices: ['Yes', 'No']
    }])
    .then(({officenumber, addPerson}) => {
         manager.push(new Manager(employee, id, email, officenumber))
         if (addPerson === 'Yes') {
             inquirerTeam();
  

        return promptUser();
        
    
    
} else if (position === "Engineer") {
    return inquirer

    .prompt ([
    {
        type: 'text',
        name: 'Github',
        message: 'What is your github?'
    },
    {
        type: 'list',
        name: 'addPerson',
        message: 'Would you like to add another person?',
        choices: ['Yes', 'No']
    }])
    
    .then(({github, addPerson}) => {
        //const engineer = new Engineer(employee, id, email, github);
        engineer.push(new Engineer(employee, id, email, github))
        // return inquirerTeam();
        if (addPerson === 'Yes') {
            
            return promptUser();
        
} else if (role === 'Intern') {

    return inquirer
    .prompt ([
    {
        type: 'text',
        name: 'school',
        mesage: 'What school did you attend?'
    },
    {
        type: 'list',
        name: 'addPerson',
        message: 'Would you like to add another person?',
        choices: ['Yes', 'No']
    }])
    .then(({school,addPerson}) => {
     //   const intern = new Intern(employee, id, email, school);
     intern.push(new Intern(employee, id, email, school))
     
     if (addPerson === 'Yes')
        return promptUser();
    });


    
    
}


promptUser()
    .then(fileData => {
        return generatePage(fileData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })