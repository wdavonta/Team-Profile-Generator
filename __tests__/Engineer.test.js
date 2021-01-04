const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee');

test ("can set github account to constructor argument", () => {
    const testValue = "Githubname";
    const employee = new Engineer ("Foo", 1, "test@test.com", testValue);
    expect(employee.gitHub).toBe(testValue);
})


test ("Can get Githubname to getGithub", () => {
    const testValue = "Githubname";
    const employee = new Engineer ("Foo", 1, "test@test.com", "Githubname");
    expect(employee.getGithub()).toBe(testValue)

})


test ("getRole() should return \"Engineer\"", ()=> {
    const testValue = "Engineer";
    const employee = new Engineer ("Foo", 1, "test@test.com", "Githubname");
    expect(employee.getRole()).toBe(testValue);
})