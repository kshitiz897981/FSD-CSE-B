import React from 'react'
import UserContext from '../../Context/UserContext'
import { useContext } from 'react'

function Profile() {
    const{user}=useContext(UserContext)
    if(!user)
        return <h1>Please Login</h1>
    else
        return <div>Welcome {user.username}</div>
}

export default Profile