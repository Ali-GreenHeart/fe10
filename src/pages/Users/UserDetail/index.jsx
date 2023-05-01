import { useParams } from "react-router"

const UserDetail = ({ }) => {
    const { id } = useParams()
    return (
        <div>UserDetail for {id}</div>
    )
}
export default UserDetail
