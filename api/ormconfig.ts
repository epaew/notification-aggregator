import { NamingStrategy } from './src/config/NamingStrategy'

const url =
  process.env.DATABASE_URL || 'postgres://postgres:postgres@db:5432/postgres'

// TODO: want to use `export default` but it does not working...
module.exports = {
  // create connection
  type: 'postgres',
  url,

  // TypeORM behavior
  synchronize: true,
  logging: true,

  // place of files
  entities: [
    'src/entity/**/*.ts'
  ],
  migrations: [
    'src/migration/**/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  },
  namingStrategy: new NamingStrategy()
}
