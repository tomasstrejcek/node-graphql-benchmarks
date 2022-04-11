# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 5s
connections: 5
pipelining: 1

| Server                                                                                                                                                                        | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                                           | --:        | :-:     | --:           |
| [mercurius+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit.js)                                                   | 10170.4    | 0.02    | 69.18         |
| [mercurius+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit+type-graphql.js)                         | 8538.8     | 0.07    | 58.07         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                                                           | 6682.0     | 0.26    | 45.43         |
| [mercurius+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+type-graphql.js)                                                 | 6310.8     | 0.27    | 42.91         |
| [apollo-server-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit.js)                           | 5961.2     | 0.27    | 40.72         |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                                   | 4638.8     | 0.43    | 31.70         |
| [mercurius+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-compose.js)                                           | 3721.0     | 0.81    | 25.30         |
| [apollo-server-fastify+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit+type-graphql.js) | 3711.0     | 0.71    | 25.35         |
| [apollo-server-fastify+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+type-graphql.js)                         | 2621.8     | 1.27    | 17.91         |
