const Intern = require('../lib/Intern');

it('creates an intern object', () => {
  const intern = new Intern('Chuck', 111, 'cmdebrosse@outlook.com', 'The Ohio State University');

  expect(intern.schoolName).toEqual(expect.any(String));
});

it('gets role of employee', () => {
  const intern = new Intern('Chuck', 111, 'cmdebrosse@outlook.com', 'The Ohio State University');

  expect(intern.getRole()).toEqual('Intern');
});