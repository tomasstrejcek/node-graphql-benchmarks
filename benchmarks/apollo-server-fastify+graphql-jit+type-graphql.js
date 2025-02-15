'use strict'

const { createAsyncTypeGraphQLSchema } = require('../lib/schemas/createTypeGraphQLSchema')
const { ApolloServer } = require('apollo-server-fastify')
const { parse } = require('graphql')
const { compileQuery } = require('graphql-jit')
const app = require('fastify')()

const cache = {}

createAsyncTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    executor: ({ source, context }) => {
      if (!(source in cache)) {
        const document = parse(source)
        cache[source] = compileQuery(schema, document)
      }

      return cache[source].query({}, context, {})
    }
  })
  server.start().then(() => {
    app.register(server.createHandler())
    app.listen(4001)
  })
})
