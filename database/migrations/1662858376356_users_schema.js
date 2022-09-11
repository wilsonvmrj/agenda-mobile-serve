'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up() {
    this.table('users', (table) => {
      // alter table
      table.string('cpf', 15).notNullable().defaultTo('0000');
      table.string('cidade')
      table.string('endereco')
      table.string('cep')
      table.string('polo')
      table.string('modalidade')
      table.string('area')
      table.string('curso')
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('cpf', 15);
      table.dropColumn('cidade')
      table.dropColumn('endereco')
      table.dropColumn('cep')
      table.dropColumn('polo')
      table.dropColumn('modalidade')
      table.dropColumn('area')
      table.dropColumn('curso')
    })
  }
}

module.exports = UsersSchema
