const Intern = require('../assets/library/intern')
let intern = new Intern('jack','4','a@test.com','UM')

describe('testing intern.js',()=>{
    it('should return intern school',()=>{
        expect(intern.school).toBe('UM')
    })
});