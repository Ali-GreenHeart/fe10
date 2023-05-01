import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const USERS_URL = `https://jsonplaceholder.typicode.com/users/`


const UserDetail = ({ }) => {
    const { id } = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get(USERS_URL + id).then(({ data }) => {
            setUserData(data)
        })
    }, [])
    return (
        <>
            <h1>UserDetails for {userData.name}</h1>
            <h3>Name {userData.name}</h3>
            <h3>Company name {userData.company?.name}</h3>
        </>
    )
}
export default UserDetail
