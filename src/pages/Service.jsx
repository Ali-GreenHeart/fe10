import { useParams } from "react-router"

const services = [
    "Agaclarin suvarilmasi",
    "Pishiklerin yedirdilmesi",
    "Tasklarin yazilmamasi",
    "JS -in unutdurulmasi",
]

const Service = () => {
    const { id } = useParams()

    return (
        <div>
            {services[id]}
        </div>
    )
}
export default Service
