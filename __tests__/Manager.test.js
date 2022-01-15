const Manager = require('../lib/Manager');

it('creates a manager object', () => {
  const manager = new Manager('Chuck', 111, 'cmdebrosse@outlook.com', 1);

  expect(manager.officeNum).toEqual(expect.any(Number));
});

it('gets role of employee', () => {
  const manager = new Manager('Chuck', 111, 'cmdebrosse@outlook.com', 1);

  expect(manager.getRole()).toEqual('Manager');
})