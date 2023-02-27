
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name').notNullable()
      table.string('phone').notNullable() 
      table.boolean('status').notNullable()
      table.string('role').notNullable()
      })
    } 
    public async down () {
      this.schema.dropTable(this.tableName)
      }}