'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')
const {
  createAsyncTypeGraphQLSchema
} = require('../lib/schemas/createTypeGraphQLSchema')

const app = Fastify()

createAsyncTypeGraphQLSchema().then((schema) => {
  app.register(mercurius, {
    schema,
    jit: 1
  })
  app.listen(4001)
})
