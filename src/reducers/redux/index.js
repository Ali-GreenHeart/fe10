import { v4 as idGenerator } from 'uuid'

const initialStore = {
    users: []
}

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, users: action.payload }
        case "ADD_USER":
            return { ...state, users: state.users.concat({ id: idGenerator(), name: action.payload }) }
        case "DELETE_USER":
            return { ...state, users: state.users.filter((user) => user.id !== action.payload) }
        default:
            return state;
    }
}

export default rootReducer;
