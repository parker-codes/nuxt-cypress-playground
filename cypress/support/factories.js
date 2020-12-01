import { build, fake } from 'test-data-bot';

// faker options -> https://github.com/marak/Faker.js/#api-methods

export const buildUser = build('User').fields({
  first_name: fake((f) => f.name.firstName()),
  last_name: fake((f) => f.name.lastName()),
  email: fake((f) => f.internet.email()),
});
