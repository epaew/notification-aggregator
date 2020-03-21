import { DefaultNamingStrategy } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'
import pluralize from 'pluralize'

export class NamingStrategy extends DefaultNamingStrategy {
  tableName(entityName: string, customName: string) {
    return customName || pluralize(snakeCase(entityName))
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ) {
    const baseName = customName || snakeCase(propertyName)
    return [...embeddedPrefixes.slice(), baseName].join('_')
  }

  relationName(propertyName: string) {
    return snakeCase(propertyName)
  }

  joinColumnName(relationName: string, referencedColumnName: string) {
    return snakeCase(relationName + '_' + referencedColumnName)
  }

  joinTableName(
    firstTableName: string,
    _secondTableName: string,
    firstPropertyName: string
  ) {
    return snakeCase(
      `${pluralize.singular(firstTableName)}_${firstPropertyName}`
    )
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string
  ) {
    return `${snakeCase(pluralize.singular(tableName))}_${columnName ??
      propertyName}`
  }
}
