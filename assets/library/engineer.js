const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name,id,email,gitHub){
        super(name,id,email)
        this.gitHub = gitHub
    }
    getRole(){
        return 'Engineer'
    }
    getGitHub(){
        return this.gitHub
    }
    toString(){
    return `
<div class="card" style="max-width: 18rem;">
    <div class="card-body text-bg-primary mb-3">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text ">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${this.id}</li>
        <li class="list-group-item">Email:<a href="#" class="card-link">${this.email}</a></li>
        <li class="list-group-item">GitHub:<a href="#" class="card-link">${this.gitHub}</a></li>

    </ul>
</div>
`
    }
}
module.exports = Engineer;