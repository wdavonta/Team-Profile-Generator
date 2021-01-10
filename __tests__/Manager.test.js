const Manager = require('../lib/Manager.js');



test("Can set office number constructor arguement", () => {
    const testValue = 100;
    const employee = new Manager ("Foo", 1, "test@test.com", testValue);
    expect(employee.officeNumber).toBe(testValue);

});
    
test("getRole() should return \"Manager\"", ()=> {
    const testValue = "Manager";
    const employee = new Manager("Foo", 1,"test@test.com", 100);
    expect(employee.getRole()).toBe(testValue);
});




test("Can get office number to getofficeNumber", () => {
    const testValue = 100;
    const employee = new Manager ("Foo", 1, "test@test.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});