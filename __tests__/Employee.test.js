const Employee = require('../lib/Employee.js');


test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect (typeof(employee)).toBe("object");
});

test("Can set name to constructor argument", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);

});

test("Can set id to consturctor argument", () => {
    const testValue = "100";
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);

});

test("Can set email to constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);

});

test("Can get name to getName", () => {
    const testValue = "John";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);

});

test("Can get id to getId", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);

});

test("Can get email to getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo, 1, testValue");
});

test("getRole() should return \"Employee\"", ()=> {
    const testValue = "Employee";
    const employee = new Employee("John", 1,"test@test.com");
    expect(employee.getRole()).toBe(testValue);
});


