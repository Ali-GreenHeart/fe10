import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const url = "https://restcountries.com/v3.1/all"
const Countries = () => {
    const [c, setC] = useState([])

    axios.get(url).then(({ data }) => {
        setC(data)
    })

    return (
        <>
            {
                c.map((country) => {
                    return <Link
                        key={country?.name?.common}
                        to={`/countries/azerbaijan`}
                    >{country?.name?.common}</Link>
                })
            }

        </>
    )
}
export default Countries
