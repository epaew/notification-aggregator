import { DefaultNamingStrategy } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'
import pluralize from 'pluralize'

export class NamingStrategy extends DefaultNamingStrategy {
  tableName(entityName: string, customName: string): string {
    return customName ?? pluralize(snakeCase(entityName))
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ): string {
    const baseName = customName ?? snakeCase(propertyName)
    return [...embeddedPrefixes.slice(), baseName].join('_')
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName)
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(relationName + '_' + referencedColumnName)
  }

  joinTableName(
    firstTableName: string,
    _secondTableName: string,
    firstPropertyName: string
  ): string {
    return snakeCase(
      `${pluralize.singular(firstTableName)}_${firstPropertyName}`
    )
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string
  ): string {
    const prefix = snakeCase(pluralize.singular(tableName))
    const suffix = columnName ?? propertyName

    return `${prefix}_${suffix}`
  }
}
