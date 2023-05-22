import axios from "axios"
import { useFormik } from "formik"

const url = `http://localhost:5000/user/signup`
const Signup = ({ }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(url, values)
                alert(data)
            } catch (err) {
                console.log('error')
            }
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="enter your name"
                />
                <input
                    type="text"
                    name="surname"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    placeholder="enter your surname"
                />
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="enter your email"
                />
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="enter your password"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Signup
