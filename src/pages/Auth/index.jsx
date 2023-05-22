import { useState } from "react"
import Signin from "./Signin"
import Signup from "./Signup"
import ProfilePage from "./Profile"

const Auth = ({ }) => {
    const [page, setPage] = useState(2) // 0 -signup, 1-signin
    return (
        <>
            {
                page === 0 && (<div>
                    <h1>Signup</h1>
                    <Signup />
                </div>)
            }
            {
                page === 1 && (<div>
                    <h1>Signin</h1>
                    <Signin setPage={setPage} />
                </div>)
            }
            {
                page === 2 && (<div>
                    <h1>Profile Page</h1>
                    <ProfilePage />
                </div>)
            }
            <button onClick={() => setPage(0)}>signup</button>
            <button onClick={() => setPage(1)}>signin</button>
        </>
    )
}
export default Auth
