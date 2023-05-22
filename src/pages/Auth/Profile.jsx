import axios from "axios"
import { useEffect, useState } from "react"

const url = `http://localhost:5000/user/profile`
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

const ProfilePage = ({ }) => {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setProfile(data)
        })
    }, [])
    return (
        <>
            <h1>{profile.name}</h1>
            <h1>{profile.surname}</h1>
            <h1>{profile.email}</h1>
        </>
    )
}
export default ProfilePage
