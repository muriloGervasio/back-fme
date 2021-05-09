export const config = () => ({
  database: {
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
    database: process.env.DB,
    ssl: process.env.SSL === 'true',
  },
});
