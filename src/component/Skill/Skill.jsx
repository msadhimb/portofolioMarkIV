import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Skill.css'
import Particle from '../Particle/Particle';


const Skill = () => {
    
    return (
        <>
            <Container className='skill rounded mt-5' id='particles-js'>
                {/* <Particles className='particles' params={particleConfig}/> */}
                <Particle/>
                    
                    <div className="row d-flex justify-content-center skillProgress">
                        <h2 className='text-white title'>Skill</h2>
                        <div className="col-md-3 d-flex flex-column align-items-center mt-3">
                            <div className="circular-progress-html-css d-flex justify-content-center align-items-center">
                                <span className="progress-value-html-css text-white">80%</span>
                            </div>
                            <span className='mt-2 text-white'>HTML & CSS</span>
                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center mt-3">
                            <div className="circular-progress-php d-flex justify-content-center align-items-center">
                                <span className="progress-value-php text-white">70%</span>
                            </div>
                            <span className='mt-2 text-white'>PHP</span>
                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center mt-3">
                            <div className="circular-progress-javascript d-flex justify-content-center align-items-center">
                                <span className="progress-value-javascript text-white">50%</span>
                            </div>
                            <span className='mt-2 text-white'>JavaScript</span>
                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center mt-3">
                            <div className="circular-progress-english d-flex justify-content-center align-items-center">
                                <span className="progress-value-english text-white">50%</span>
                            </div>
                            <span className='mt-2 text-white'>English</span>
                        </div>
                        
                    </div>
                
                
            </Container>
        </>
    )
}

export default Skill