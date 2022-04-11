'use strict'

const { createServer } = require('@graphql-yoga/node')
const { createApolloSchema } = require('../lib/schemas/createApolloSchema')

const schema = createApolloSchema()

const server = createServer({ schema })

server.start({ port: 4001, endpoint: '/graphql' })
