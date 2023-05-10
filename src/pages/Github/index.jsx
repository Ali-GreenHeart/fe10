import axios from 'axios'
import styles from './index.module.css'
import { useState } from 'react'

const API_GITHUB_URL = 'https://api.github.com/users/'

async function getData(username) {
    const { data } = await axios.get(API_GITHUB_URL + username)
    return data
}

const GithubMain = () => {
    const [data, setData] = useState({})
    const [username, setUsername] = useState('')

    return (
        <>
            <div className={styles.inputContainer}>
                <input type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <button
                    onClick={() => {
                        getData(username).then((data) => {
                            setData(data)
                        })
                    }}
                >search</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setUsername('shakhmuad')
                    }}
                >shakhmurad</button>
                <button
                    onClick={() => {
                        setUsername('Sada-Shukurova')
                    }}
                >sada</button>
                <button
                    onClick={() => {
                        setUsername('farid-hashimzada')
                    }}
                >ferid</button>
                <button
                    onClick={() => {
                        setUsername('shumalov0')
                    }}
                >merhum intiqam ⚰</button>
                <button
                    onClick={() => {
                        setUsername('Ali-GreenHeart')
                    }}
                >ali</button>
            </div>
            <div className={styles.dataContainer}>
                <p><b>Name:</b> {data.name}</p>
                <p> <b>Bio: </b>{data.bio}</p>
                <p><b>Location: </b>{data.location}</p>
                <p><b>Follower count: </b>{data.followers} <a target='_blank' href={`/github-followers/${username}`}>link</a> </p>
                <p><b>Image: </b><img style={{ width: 150, height: 150 }} src={data.avatar_url} alt="" /></p>
                <p><b>to account: </b><a target='_blank' href={data.html_url}>link</a></p>
                <p><b>to repos: </b> <a target='_blank' href={`/github-repos/${username}`}>link</a></p>
            </div>
        </>
    )
}
export default GithubMain
