import { Link } from 'react-router-dom';
import background from '../assets/images/background.jpg'
import About from '../components/About'
function Home(){
    const landing = {
        height: '90vh',
        width: '100%',
        backgroundImage: `url(${background})`,
        //backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v871-aum-12_1_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=72cedb3563204aa6708b52796c9595aa")`,
        //backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v871-aum-04_1_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d6a3341679289d1083f8599a89cad9df")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const text = {
        position: 'relative',
        top: '20%',
        left: '10%',
        // color:'white',
        // textShadow: '5px -1px 0 black, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000',
        // fontWeight:'bold',
        // letterSpacing:'4px'
    };

    const button = {
        position: 'relative',
        top: '20%',
        left: '10%',
        height: '32px',
        width: '108px',
        marginTop: '20px',
        backgroundColor:'black',
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