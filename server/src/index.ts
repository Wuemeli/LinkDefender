import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { checkPhishlists } from './utils'
import { startCron } from './cron'
import { config } from 'dotenv'
config()

const app = new Hono()
startCron();

app.use('*', async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: "*",
  })
  return corsMiddlewareHandler(c, next)
})

app.get('/', (c) => {
  return c.redirect("https://github.com/Wuemeli/LinkDefender");
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

const port = process.env.PORT || 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
