import React,{useState,useEffect} from 'react'
import { Container,PostForm } from '../components'
import service from '../appwrite/configAppwrite'
import { useParams,useNavigate } from 'react-router-dom'

/*
EditPost is a page component whose job is to:
Read the slug from the URL
Fetch the post data from backend (Appwrite)
Pass that post to <PostForm /> for editing
Redirect if something is wrong
*/

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}


export default EditPost