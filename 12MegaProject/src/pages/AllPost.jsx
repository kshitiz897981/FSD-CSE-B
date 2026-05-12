import React,{useState,useEffect} from 'react'
import service from '../appwrite/configAppwrite'
import { Container, PostCard } from '../components'

function AllPost() {
    const[posts,setposts]=useState([])
    useEffect(()=>{
   service.getPosts([]).then((posts)=>{
        if(posts){
            setposts(posts?.documents||[])
        }
        else
            setposts([])
    })
    },[])
 
  return (
    <div className='py-8 w-full'>
        <Container>
           <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                   <PostCard {...post} />
                </div>
            ))}

           </div>
        </Container>
    </div>
  )
}

export default AllPost