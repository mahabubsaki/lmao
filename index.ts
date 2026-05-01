import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.json({ message: 'Hello Hono from Preview.Cloud!' }))

export default {
  port: 3000,
  fetch: app.fetch,
}
