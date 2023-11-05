import './home.css';
import resume from "../../components/img/Resume.pdf";
const Home = () => {
    return (
        <div className='bg_img'>
            <div className="container home_cont">
                <div className="home-desc">
                    <div className="hello">
                        <span>HELLO</span>
                    </div>
                    {/* <marquee direction="right" className="marquee">
                        <h1>I'm <i style={{ color: "aliceblue" }}>Patrick Udeh</i></h1>
                    </marquee> */}
                </div>
                <div className='desc'>
                    <p>This is Patrick Udeh. A Mechanical Engineer, Web Developer (MERN-STACK). <br /> Located in Nigeria, looking for working around the globe.</p>
                    <button className='download_btn'>
                        <a href={resume} download="resume">Download CV</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home