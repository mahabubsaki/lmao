const fastify = require('fastify')({ logger: true })
fastify.get('/', async () => ({ hello: 'fastifys' }))
fastify.listen({ port: 3000, host: '0.0.0.0' })
