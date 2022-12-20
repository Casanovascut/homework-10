const Engineer = require('../assets/library/engineer')
let engineer = new Engineer('jack','4','a@test.com','enginGithub')

describe('testing engineer.js',()=>{
    it('should return engineer github',()=>{
        expect(engineer.gitHub).toBe('enginGithub')
    })
});