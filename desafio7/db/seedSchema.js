import knex from 'knex'
import config from './config.js'

knex(config).schema.createTable('products', table => {
    table.increments('id'),
    table.string('title').notNullable(),
    table.float('price'),
    table.string('thumbnail')
}).then(() => {
    console.log('Table created')
}).catch(err => {
    console.log(err)
}).finally(() => {
    knex.destroy()
})