const Intern = require('../lib/Intern.js');



test ("Can set school to constructor argument", () => {
    const testValue = "School";
    const employee = new Intern ("Foo", 1, "test@test.com", testValue);
    expect(employee.school).toBe(testValue);
});

test ("Get school to getSchool", () => {
    const testValue = "School";
    const employee = new Intern ("Foo", 1, "test@test.com", "School");
    expect(employee.getSchool()).toBe(testValue);
});


test ("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern ("Foo", 1, "test@test.com", "School");
    expect(employee.getRole()).toBe(testValue);
});