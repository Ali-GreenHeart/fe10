import axios from "axios"
import { useEffect, useReducer } from "react"
import { userReducerWithUseReducer } from "../../reducers/UserReducer"
import { JSON_PLCHLDR_USERS_USER, nameGenerator } from "../../utils"

const UsersWithReducer = ({ }) => {
    const [state, dispatch] = useReducer(userReducerWithUseReducer, [])

    useEffect(() => {

        (async () => {
            const { data } = await axios.get(JSON_PLCHLDR_USERS_USER)
            dispatch({ type: 'GET_DATA', payload: data })
        })()

    }, [])

    return (
        <div>
            <button onClick={() => {
                dispatch({ type: 'ADD_USER', payload: prompt("adini yaz", nameGenerator(8)) })
            }}>
                add user
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_FIRST_USER' })}>
                remove first item
            </button>
            <div>
                {
                    state.map((user) => {
                        return <div key={user.id}>
                            <p>{user.name}
                                <button onClick={() => {
                                    let newName = prompt("enter new name", user.name)
                                    dispatch({ type: 'EDIT_USER', payload: { newName, id: user.id } })
                                }}>🖋</button>
                                <button onClick={() => {
                                    dispatch({ type: 'DELETE_USER', payload: user.id })
                                }}>x</button>
                            </p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
export default UsersWithReducer
