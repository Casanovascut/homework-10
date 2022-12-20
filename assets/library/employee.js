class Employee {
    constructor(name,id,email,typeOfEmployee){
    this.name=name;
    this.id = id;
    this.email =email;
    this.typeOfEmployee=typeOfEmployee
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'employee'
    }
}
module.exports = Employee
