module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///onboarder",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
