// Update with your config settings.
// https://events-serv.herokuapp.com/


module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/events'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/test-events'
  },
};
