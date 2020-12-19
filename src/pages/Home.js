import { Link } from 'react-router-dom';
import background from '../assets/images/background.jpg'
import About from '../components/About'
function Home(){
    const landing = {
        height: '90vh',
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const text = {
        position: 'relative',
        top: '20%',
        left: '10%',
    };

    const button = {
        position: 'relative',
        top: '20%',
        left: '10%',
        height: '32px',
        width: '108px',
        marginTop: '20px',
    }


    return(
        <div>
            <div style={landing}>
                <p style={text} className="xlg-text bold">Innovate COVID-19<br/>Detection with<br/>Artificial Intelligence</p>
                <Link to="/">
                    <button style={button} className="button sm-text bold shadow-effect">Start Now</button>
                </Link>
            </div>
            <About/>
        </div>
    )
}

export default Home;