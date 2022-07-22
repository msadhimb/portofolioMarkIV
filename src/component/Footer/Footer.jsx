import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Footer.css'

const Footer = () => {
  return (
        <>
            <hr  className='pembatas'/>
            <Container>
                <div>
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-md-3">
                            <p style={{fontSize: '25px'}}>Salman <br />
                            <span className='ms-5'>Adhim</span></p>
                        </div>
                        <div className="col-md-3">
                            <p>This website is made using ReactJS by Salman Adhim</p>
                        </div>
                        <div className="col-md-3">
                            <a href="https://github.com/msadhimb" className='btn'><i className="fa-brands fa-github" style={{fontSize: '50px'}}></i></a>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer