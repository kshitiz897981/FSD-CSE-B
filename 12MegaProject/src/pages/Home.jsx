import React, {useEffect, useState} from 'react'
import service from '../appwrite/configAppwrite'
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
   
      const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        service
            .getPosts()
            .then((posts) => {
                 if (Array.isArray(posts?.documents)) {
                    setPosts(posts.documents);
                } else {
                    setPosts([]);
                }
            })
            .catch((error) => {
                console.error("Failed to fetch posts", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // 1️⃣ Loading state
    if (loading) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <h1 className="text-xl font-semibold">Loading posts...</h1>
                </Container>
            </div>
        );
    }

    // 2️⃣ User not logged in
    if (!userData) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        );
    }

    // 3️⃣ Logged in but no posts
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">
                        No posts available
                    </h1>
                </Container>
            </div>
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home