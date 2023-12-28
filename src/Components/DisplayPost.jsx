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

  return (
    <Box sx={{ maxWidth: "600px", display: "flex", flexDirection: "column", margin: "auto", gap: 6, py:2 }}>
    {posts && posts.map(post=>(
        <PostCard post={post} key={post._id} />
    ))}
</Box>
    
  )
}

export default DisplayPost;