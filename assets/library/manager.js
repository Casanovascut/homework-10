const Employee = require("./employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    toString(){
    return `
<div class="card" style="max-width: 18rem;">
    <div class="card-body text-bg-primary mb-3">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text ">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.id}</li>
        <li class="list-group-item">Email: ${this.email} <a href="#" class="card-link">Card link</a></li>

    </ul>
</div>
`
    }
}
module.exports = Manager;