import { NamingStrategy } from './src/config/NamingStrategy'

// TODO: want to use `export default` but it does not working...
module.exports = {
  // create connection
  type: 'postgres',
  url: process.env.DATABASE_URL,

  // TypeORM behavior
  synchronize: false,
  logging: true,

  // place of files
  entities: ['src/entity/index.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  },
  namingStrategy: new NamingStrategy()
}
