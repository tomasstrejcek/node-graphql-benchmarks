'use strict'

const { createAsyncTypeGraphQLSchema } = require('../lib/schemas/createTypeGraphQLSchema')
const { ApolloServer } = require('apollo-server-fastify')
const app = require('fastify')()

createAsyncTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema
  })
  server.start().then(() => {
    app.register(server.createHandler())
    app.listen(4001)
  })
})
