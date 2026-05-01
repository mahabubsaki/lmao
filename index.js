const { serve } = require('@hono/node-server')
const { Hono } = require('hono')
const app = new Hono()
app.get('/', (c) => c.json({ message: 'Hello Hono + Node.js!' }))
serve({
  fetch: app.fetch,
  port: 3000
})
