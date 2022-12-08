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
        <li class="list-group-item">Employee ID: ${this.id}</li>
        <li class="list-group-item">Email:<a href="#" class="card-link">${this.email}</a></li>
        <li class="list-group-item">Office number: ${this.officeNumber}</li>
    </ul>
</div>
`
    }
}
module.exports = Manager;