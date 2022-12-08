const { writeFile } = require('fs').promises;
const { fstat } = require('fs');
const inquirer = require('inquirer');
const Manager = require("./assets/library/manager")
const teamMembers = []
const promptMain = () => {
    inquirer.prompt([
    {
        type:'list',
        name:'typeOfEmployee',
        message: 'which is the employees title',
        choices: ['manager','engineer','intern']
    }
]).then((data)=>{
    switch(data.typeOfEmployee){
    case 'manager':
        promptManager();
        break
    }
})}
const promptAnother = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addDeveloper",
            message: "do you want to add another team member?"
        },
]).then((data)=>{
    if(data.addDeveloper){
    promptMain()
    }else{
    generateHTML()
    }
})}
const promptManager = () => {
    inquirer.prompt([
{
        type:'input',
        name: 'employeeName',
        message: 'What is the employees name?'
    },{
        type: 'input',
        name: 'id',
        message: 'What is the employees id number?'
    },{
        type: 'input',
        name: 'email',
        message: 'what is the employees email address'
    },{
        type: 'input',
        name: 'officeNumber',
        message: 'what is the managers office number?'
    }
    ]).then((data)=>{
        const manager = new Manager(data.name,data.id,data.email,data.officenumber)
            teamMembers.push(manager)
        promptAnother()
    })
}

// generate html file
const generateHTML = () =>{
const Varhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    ${teamMembers.join('')}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>

`
writeFile('index.html', Varhtml)
.then(()=>console.log('succesfully wrote to index.html'))
.catch((err) => console.error(err));
}

// Function call to initialize app
promptMain()