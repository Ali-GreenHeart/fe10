import { useState } from "react"
import Button from "./Button"


export default function Counter() {
    const [count, setCount] = useState(0)

    return <div>
        <h1>{count}</h1>
        <Button
            text="+"
            onClick={() => {
                setCount(count + 1)
                // setCount((pre) => ++pre)
            }}
            bgColor="green"
            txtColor="white"
        />
        <Button
            text="-"
            onClick={() => {
                setCount(count - 1)
            }}
            bgColor="red"
            txtColor="white"
        />
        <Button
            text="reset"
            bgColor="black"
            txtColor={'white'}
            onClick={() => {
                setCount(0)
            }}
        />
        <Button
            text="special"
            bgColor="teal"
            txtColor={'white'}
            onClick={() => {
                let ed = +prompt('ededi daxil edin: ')
                setCount(ed)
            }}
        />
        <Button
            text="log"
            bgColor="blue"
            txtColor={'white'}
            onClick={() => {
                console.log(count)
            }}
        />
    </div>
}
