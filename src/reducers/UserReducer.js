import { v4 as idGenerator } from 'uuid'


export const userReducerWithUseReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return action.payload
        case "ADD_USER":
            return [...state, { id: idGenerator(), name: action.payload }]
        case "DELETE_USER":
            return state.filter((user) => user.id !== action.payload)
        case "EDIT_USER":
            return state.map((user) => {
                if (action.payload.id === user.id) {
                    return { ...user, name: action.payload.newName }
                }
                return user;
            })
        case 'REMOVE_FIRST_USER':
            const [_, ...newUsers] = state
            return newUsers;
    }
}
