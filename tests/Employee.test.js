const Employee = require('../assets/library/employee')
let person = new Employee('jack','4','a@test.com')
describe("testing employee.js", () =>{
    it('should return employee', ()=>{
        // expected output
        expect(person.getRole()).toBe('employee')
    })
    it('should return name inputed from user', ()=>{
        expect(person.name).toBe('jack')
    })
    it('should return id inputed by user', ()=>{
        expect(person.id).toBe('4')
    })
    it('should return email inputed by user',()=>{
        expect(person.email).toBe('a@test.com')
    })

});