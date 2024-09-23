import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { checkPhishlists } from './utils'
import { startCron } from './cron'

const app = new Hono()
startCron();

app.use('*', async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: "*",
  })
  return corsMiddlewareHandler(c, next)
})

app.get('/', (c) => {
  //todo redirect to chrome extension
  return c.text('Hello Hono!')
})

app.get('/check/:hostname', (c) => {
  const hostname = c.req.param('hostname');

  if (!hostname) {
    return c.json( { result: false, "message": "No hostname provided" })
  }

  const result = checkPhishlists(hostname);
  if (result) {
    return c.json( { result: true, "message": "Phishing site detected" })
  } else {
    return c.json( { result: false, "message": "Site is safe" })
  }
});

const port = 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
