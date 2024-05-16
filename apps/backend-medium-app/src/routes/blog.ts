import {Hono} from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify} from 'hono/jwt'
import { createPostInput, updatePostInput } from "@repo/zod-validations/index";


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
    Variables:{
        userId: string
    }
  }>();

blogRouter.use('/*', async (c,next) => {
  
    const header = c.req.header('authorization') || '';
    const response = await verify(header.split(' ')[1],c.env.JWT_SECRET)
    if (!response){
      c.status(403);
      return c.json({error: "unauthorized"})
    }
    else{
      c.set("userId", response.id)
      await next();
    }
  })
  
  
  blogRouter.get('/:id', async (c) => {
      const id = c.req.param('id');
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try{
        const post = await prisma.post.findFirst({
            where:{
                id: id
            }
        })
        return c.json({post})
      }catch(e){
        c.status(411);
        return c.json({error: "post not found"})
      }
  })
  
  blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = createPostInput.safeParse(body);
    if (!success){
      c.status(411);
      return c.json({error: "invalid input"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const post = await prisma.post.create({
        data:{
          title: body.title,
          content: body.content,
          authorId: c.get("userId")
        },
      });
        return c.json({id: post.id})
    })

  blogRouter.put('/', async (c) => {
      const body = await c.req.json()
    const {success} = updatePostInput.safeParse(body);
    if (!success){
        c.status(411);
        return c.json({error: "invalid input"})
    }
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const post = await prisma.post.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
    return c.json({id: post.id})
  })

  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const posts = await prisma.post.findMany();
    return c.json({posts})

})
