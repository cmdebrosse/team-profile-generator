const Engineer = require('../lib/Engineer');

it('creates an engineer object', () => {
  const engineer = new Engineer('Chuck', 111, 'cmdebrosse@outlook.com', 'cmdebrosse');

  expect(engineer.githubName).toEqual(expect.any(String));
});

it('gets role of employee', () => {
  const engineer = new Engineer('Chuck', 111, 'cmdebrosse@outlook.com', 'cmdebrosse');

  expect(engineer.getRole()).toEqual('Engineer');
});