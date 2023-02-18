// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/client'

type postProps = {
  title: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post:postProps = JSON.parse(req.body)
    if(req.method === "POST"){
      if(!post.title.length){
        return res.status(500)
        .json({message:"Please dont leave this empty"})
      }
      const data = await prisma.post.create({
        data:{
          title:post.title
        }
      })
      res.status(200).json(data)
     }
  } catch (error) {
    res.status(200).json(error)
  }
 
}
