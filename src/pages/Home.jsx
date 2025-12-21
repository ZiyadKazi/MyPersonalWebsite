import './Home.css'
import NavBar from '../components/NavBar'
import profilePic from '../assets/profilePic.png'

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <NavBar/>
            </div>

            
            <div className="hero-section">
                <div className="profile-picture">
                    <img src = {profilePic} alt = "Ziyad Kazi" />
                </div>

                <div className="hero-text">
                    <h2 className = "greeting">Hey! 👋</h2>
                    <h1 className = "name">I'm Ziyad Kazi 👨🏾‍💻</h1>
                    <p className="bio">{"I'm studying CS and Math at Rice University. I like creating fun and impactful projects that aim to solve real world problems. In my free time, you can find me on the tennis court, exploring coffee shops, watching horror movies, and shopping in Turkey :)"}</p>
                </div>
                
            </div>

            <div className = "my-buttons">
                    <button className = "my-work-btn">What I've Worked On</button>
                    <button className = "contact-me-btn">Reach Out!</button>
            </div>

        </div>
    )
}

export default Home