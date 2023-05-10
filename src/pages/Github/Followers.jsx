import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const FollowersGithub = ({ }) => {
    const { username } = useParams()
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/followers`).then(({ data }) => {
            setFollowers(data)
        })
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {
                followers.map(({ avatar_url, login }) => {
                    return <div>
                        <p>{login}</p>
                        <img style={{ width: 200, height: 200 }} src={avatar_url} alt="" />
                    </div>
                })
            }
        </div>
    )
}
export default FollowersGithub
