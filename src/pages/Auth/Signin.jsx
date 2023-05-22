import axios from "axios"
import { useFormik } from "formik"

const url = `http://localhost:5000/user/signin`
const Signin = ({ setPage }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(url, values)
                localStorage.setItem("token", data)
                setPage(2)
            } catch (err) {
                console.log('error')
            }
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
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
export default Signin
