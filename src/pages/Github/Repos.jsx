import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const ReposGithub = ({ }) => {
    const { username } = useParams()
    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
            setRepos(data)
        })
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
            {
                repos.map(({ name, language, visibility }) => {
                    return <div style={{ border: '1px solid', width: 200, height: 200 }}>
                        <p><b>repo name: </b> {name}</p>
                        <p><b>language: </b> {language}</p>
                        <p><b>Visibility: </b> {visibility}</p>
                    </div>
                })
            }
        </div>
    )
}
export default ReposGithub
