export const config = () => ({
  database: {
    port: parseInt(process.env.PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
  },
});
