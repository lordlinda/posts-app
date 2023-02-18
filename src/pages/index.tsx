import FormPost from "@/app/FormPost";
import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default function Home() {
  const data:{id:number,title:string}[] = getPosts()
  return (
    <main className="py-8 px-48">
      <Link className="bg-teal-500 text-black font-medium" href={"/dashboard"}>
        Go to dashboard
      </Link>
      <FormPost />
      {data.map((post)=>(
        <h1 key={post.id} className='text-lg py-6'>
       {post.title}
        </h1>
      ))}
    </main>
  );
}
