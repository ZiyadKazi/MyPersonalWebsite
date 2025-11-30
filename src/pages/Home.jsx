import './Home.css'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <NavBar/>
            </div>
            <div>
                <h3>Hey!</h3>
            </div>
            <div>
                <h1>I'm Ziyad Kazi</h1>
            </div>
            <div>
                <h2>I am a Programmer</h2>
            </div>
        </div>
    )
}

export default Home