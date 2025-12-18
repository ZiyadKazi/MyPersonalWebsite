import './Burger.css'

const Burger = ({isOpen, toggleMenu}) => {
    return (
        <button className = "burger-button" onClick={toggleMenu} aria-label="Toggle Menu">
            <div className = {`bar ${isOpen ? 'open' : ''}`}/>
            <div className = {`bar ${isOpen ? 'open' : ''}`}/>
            <div className = {`bar ${isOpen ? 'open' : ''}`}/>
        </button>
    )
}

export default Burger