
export const Home = ({ mesaj, clickleyende }) => {
    return <div>
        <h1> {mesaj} Welcome to Home page</h1>
        <button
            onClick={clickleyende}
        >click me</button>
    </div>
}
