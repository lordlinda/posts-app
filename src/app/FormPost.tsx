import React, { useState } from 'react'

export default function Home() {
 const [title, setTitle] = useState<string>('')
 async function submitPost(e:React.FormEvent){
  e.preventDefault()
  const data = await fetch(`${process.env.BASE_URL}/api/createPost`,{
    method:"POST",
    body:JSON.stringify({title})
  });
  const res= await data.json()
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}
  return (
    <form onSubmit={submitPost}>
      <input type="text"
      onChange={(e)=>setTitle(e.target.value)}
      value={title}
       />
       <button type="submit">Make a new post</button>
    </form>
  )
}
