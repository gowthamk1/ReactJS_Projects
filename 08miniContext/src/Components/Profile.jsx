import React, {useContext} from 'react'
import UserContext from '../Context/userContext'


function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user || !user.userName) return <h1>Please Login</h1>;

    return <div>Welcome {user.userName}</div>;
}

export default Profile