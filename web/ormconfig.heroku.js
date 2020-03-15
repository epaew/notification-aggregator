const NamingStrategy = require('./dist/config/NamingStrategy').NamingStrategy

module.exports = {
  // create connection
  type: 'postgres',
  url: process.env.DATABASE_URL,

  // TypeORM behavior
  synchronize: false,
  logging: true,

  // place of files
  entities: [
    'dist/entity/index.js'
  ],
  migrations: [
    'dist/migration/**/*.js'
  ],
  subscribers: [
    'dist/subscriber/**/*.js'
  ],
  cli: {
    entitiesDir: 'dist/entity',
    migrationsDir: 'dist/migration',
    subscribersDir: 'dist/subscriber'
  },
  namingStrategy: new NamingStrategy()
}
