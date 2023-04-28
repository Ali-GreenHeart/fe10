import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router"

const Country = () => {
    const { name } = useParams()
    const [state, setState] = useState()
    axios.get('https://restcountries.com/v3.1/name/' + name)
        .then(({ data }) => {
            // setState(data[0])
        })
    return (
        <div>
            {state?.name?.common}
            {state?.capital[0]}
        </div>
    )
}
export default Country
