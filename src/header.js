import { Link } from 'react-router-dom';


const Header = (props) => {
    return ( 
    <div className='header'>
        <div className='nameContainer'>
            <div className='name'>Jerry Taylor Nutt</div>
        </div>
        <div className='linkContainer'>
        <Link to="/"><div>About</div></Link>
        <Link to="projects"><div>Projects</div></Link>
        <Link to="contact"><div>Contact</div></Link>
        </div>


    </div>
    )
}

export default Header