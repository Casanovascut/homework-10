const { writeFile } = require('fs').promises;
const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
        {
        type:'input',
        name: 'devName',
        message: 'What is the developers name?'
    },
    {
        type: "confirm",
        name: "is finished",
        message: "are you done?"
    }, 
    ])
}

// generate html file
const generateHTML = ({devName}) =>
`<!DOCTYPE html>
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
    ${devName}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>

`

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers)=> writeFile('index.html', generateHTML(answers)))
        .then(()=>console.log('succesfully wrote to index.html'))
        .catch((err) => console.error(err));
}  

// Function call to initialize app
init();