const Employee = require('../lib/Employee');

it('creates an employee object', () => {
  const employee = new Employee('Chuck', 111, 'cmdebrosse@outlook.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

it("gets employee's name", () => {
  const employee = new Employee('Chuck', 111, 'cmdebrosse@outlook.com');

  expect(employee.name).toEqual(expect.any(String));
});

it("gets employee's id", () => {
  const employee = new Employee('Chuck', 111, 'cmdebrosse@outlook.com');

  expect(employee.id).toEqual(expect.any(Number));
});

it("gets employee's email", () => {
  const employee = new Employee('Chuck', 111, 'cmdebrosse@outlook.com');

  expect(employee.email).toEqual(expect.any(String));
});

it("gets employee's role", () => {
  const employee = new Employee('Chuck', 111, 'cmdebrosse@outlook.com');

  expect(employee.getRole()).toEqual('Employee');
});