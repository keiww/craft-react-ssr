import 'babel-register'
import 'ignore-styles'
import 'isomorphic-fetch'
import Koa from 'koa'

import render from './render'

const app = new Koa()
const port = process.env.PORT || '4000'

// ssr
app.use(render)

app.use(async ctx => {
  ctx.stats = 404
  ctx.body = '404'
})

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`)
})
