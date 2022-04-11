'use strict'

const OpentracingPlugin = require('apollo-opentracing').default
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { createApolloSchema } = require('../lib/schemas/createApolloSchema')

const app = express()
const schema = createApolloSchema()
const server = new ApolloServer({
  schema,
  plugins: [
    OpentracingPlugin({
      server: {
        startSpan: () => ({ finish: () => ({}) }),
        extract: () => ({}),
        finish: () => ({})
      },
      local: {
        startSpan: () => ({ finish: () => ({}) })
      }
    })
  ]
})
server.start().then(() => {
  server.applyMiddleware({ app })
  app.listen(4001)
})
