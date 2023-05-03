import axios from "axios"
import { useState, useEffect } from "react"

const USERS_URL = `https://jsonplaceholder.typicode.com/users`
const style = { display: 'block', margin: '20px 0' }
const Users = ({ }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(USERS_URL).then(({ data }) => {
            setUsers(data)
        })
    }, [])

    return (
        <>
            {
                users.length === 0
                    ?
                    <p>melumatlar cekilir</p>
                    :
                    users.map(({ id, name, username }) => <a
                        style={style}
                        key={id}
                        href={`/users/${id}`}>
                        {name}({username})
                    </a>)
            }
        </>
    )
}
export default Users   
