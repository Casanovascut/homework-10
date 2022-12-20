const Manager = require('../assets/library/manager');
let manager = new Manager('jack','4','a@test.com','312');

describe('testing manager.js', ()=>{
    it('should return the manager office number',()=>{
        expect(manager.officeNumber).toBe('312')
    })
});