const Employee = require("./employee")

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
    toString(){
    return `
<div class="card" style="max-width: 18rem;">
    <div class="card-body text-bg-primary mb-3">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text ">Intern</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${this.id}</li>
        <li class="list-group-item">Email:<a href="#" class="card-link">${this.email}</a></li>
        <li class="list-group-item">School: ${this.school}</li>
    </ul>
</div>
`
    }
}
module.exports = Intern;