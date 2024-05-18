import {OpenAPIHono, createRoute} from '@hono/zod-openapi'
import { ParamSchema } from './inputs'
import { UserSchema } from './outputs'
import { swaggerUI } from '@hono/swagger-ui'

const app = new OpenAPIHono()

const getUserRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params: ParamSchema
  },
  responses:{
    200:{
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: 'Get the user details'
    }
  }
})

app.openapi(getUserRoute,(c)=>{
  const {id} = c.req.valid("param")
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.doc('/doc',{
  openapi: '3.0.0',
  info: {
    title: 'User API',
    version: '1.0.0'
  },
})

app.get('/ui', swaggerUI({url: '/doc'}))

export default app