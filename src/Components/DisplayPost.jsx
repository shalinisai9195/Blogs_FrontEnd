import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PostCard from './PostCard';

function DisplayPost() {
  const [posts, setPosts] = useState([])
  const fetchData = async () => {
    const res = await fetch("https://myblogs-pnix.onrender.com/api/blog/allblogs", {
        method: "GET",
        headers: {
            token: localStorage.getItem("token")
        }
    })
    const data = await res.json()
    if(res.ok){
        setPosts(data)
    }else{
        console.log(data);
    }
}
  useEffect(()=>{
     fetchData()
  }, [posts])
//   const post = [
//     {
//       id:1,
//     title:'Flower',
//     content:'This is flower',
//     image:"https://static.vecteezy.com/system/resources/previews/000/203/020/original/vector-sci-fi-space-illustration.jpg",
//     user:"Then",
//     timestamp:"a day ago"
//   },
//   {
//     id:2,
//     title:'al art',
//     content:'This is art',
//     image:"https://1.bp.blogspot.com/-WDDYhHACvkI/V1BoDrvIvsI/AAAAAAAAymQ/BBhEDHjU_0Im9-8GA9s_V42K3pXHS-AQwCKgB/s1600/09-Eureka-Rolando-Cyril-AquaSixio-Digital-Art-in-a-Universe-between-Surreal-and-Fantasy-www-designstack-co.jpg",
//     user:"john",
//     timestamp:"2 days ago"
//   }
// ]
  return (
    <Box sx={{ maxWidth: "600px", display: "flex", flexDirection: "column", margin: "auto", gap: 6, py:2 }}>
    {posts && posts.map(post=>(
        <PostCard post={post} key={post._id} />
    ))}
</Box>
    
  )
}

export default DisplayPost;