import { useState } from "react"
import Button from "./Button"
import TodoCard from "./TodoCard"

const initialtodos = [
    {
        id: 0,
        title: 'React-i oyren',
        description: 'react-i oyren ki, xosuna gelsin',
        colorIndex: 2
    },
    {
        id: 1,
        title: 'React-i unut',
        description: 'react-i unut ki, qedrin bilesen',
        colorIndex: 1
    },
    {
        id: 2,
        title: 'React',
        description: 'Maaaaaark!!!!',
        colorIndex: 4
    },
]

export default function ToDo() {
    const [todos, setTodos] = useState(initialtodos)

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>welcome to todo</h1>
            <Button
                text="add todo"
                onClick={() => {
                    let id = todos.length
                    let title = prompt('title-i daxil edin: ')
                    let description = prompt('description-i daxil edin: ')
                    let colorIndex = Math.floor(Math.random() * 5)
                    setTodos(todos.concat({ id, title, description, colorIndex }))
                }}
                bgColor="teal"
            />
            {
                todos.map((obj) => {
                    return <TodoCard
                        onDelete={() => {
                            setTodos(
                                todos.filter((elem) => elem.id !== obj.id)
                            )
                        }}
                        onEdit={() => {
                            setTodos(
                                todos.map((elem) => {
                                    if (elem.id === obj.id) {
                                        return {
                                            id: elem.id,
                                            title: prompt('enter new title', elem.title),
                                            description: prompt('enter new description', elem.description),
                                            colorIndex: elem.colorIndex
                                        }
                                    }
                                    return elem;
                                })
                            )
                        }}
                        key={obj.id}
                        item={obj}
                    />
                })
            }
        </div>
    )
}
