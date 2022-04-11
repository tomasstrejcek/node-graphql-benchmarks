'use strict'

const { ApolloServer } = require('apollo-server-koa')
const Koa = require('koa')
const {
  createAsyncTypeGraphQLSchema
} = require('../lib/schemas/createTypeGraphQLSchema')

const app = new Koa()

createAsyncTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema
  })
  return server.start().then(() => {
    server.applyMiddleware({ app })
    app.listen(4001)
  })
})
