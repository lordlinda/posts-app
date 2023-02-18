import type { NextApiRequest, NextApiResponse } from 'next'
import { title } from 'process'
import { prisma } from '../../../prisma/client'

type postProps={
    title:string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const post :postProps = JSON.parse(req.body)
    if(req.method === "POST"){
        try {
            if(!title.length){
                res.status(500).json({message:"Please enter post"})
            }
            const data = await prisma.post.findMany()
            return res.status(200).json(data)
            
        } catch (error) {
             res.status(500).json(error)
        }
    }
 
}