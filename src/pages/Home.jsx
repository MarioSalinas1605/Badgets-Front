import React from 'react';
import { Link } from 'react-router-dom'
import astronauntsImage from '../images/astronaunts.svg'
import platziConfLogoImage from '../images/platziconf-logo.svg'
import './styles/Home.scss'

function Home() {
    return(
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <img 
                            src={platziConfLogoImage} 
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />
                        <h1>Badge Management System</h1>
                        <Link to="/badges" className="btn btn-primary">
                            Start
                        </Link>
                    </div>

                    <div className="Home__col d-none d-md-block col-md-8">
                        <img 
                            src={astronauntsImage}
                            alt="Astronaunts"
                            className="img-fluid p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home