import React from 'react'
import HeaderNav from '../Nav/HeaderNav'
import Container from 'react-bootstrap/esm/Container'
import Me from './me.jpg'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import Edu from '../Edu/Edu'
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <section id='about'>
        <HeaderNav/>
            <Container style={{overflowX: 'hidden'}}>
                <div className="row d-flex justify-content-center align-items-center" style={{paddingTop: '120px'}}>
                    <div className="col-md-5 aboutDesc" style={{fontSize: '15px'}}>
                        <h1>Muhamad Salman Adhim Baqy</h1>
                        <p>5th-Semester student of Informatics Engineering Study Program, Faculty of Computer Science, Universitas Dian Nuswantoro who is enthusiastic, highly motivated, and a challenge seeker. I am able to create responsive websites using HTML, CSS, Javascript and PHP</p>
                        <h3 className='mt-3'>Get To Know Me</h3>
                        <a className='btn' href="https://www.instagram.com/apwhabl.png/"><i className="fa-brands fa-instagram" style={{fontSize: '25px', color: 'purple'}}></i></a>
                        <a className='btn ms-3' href=""><i className="fa-brands fa-whatsapp" style={{fontSize: '25px', color: 'green'}}></i></a>
                        <a className='btn ms-3' href="https://www.youtube.com/channel/UCVnQ_F6_11x6DNxuAFIVqtA"><i className="fa-brands fa-youtube" style={{fontSize: '25px', color: 'red'}}></i></a>
                        <a className='btn ms-3' href="https://github.com/msadhimb"><i className="fa-brands fa-github" style={{fontSize: '25px', color: 'grey'}}></i></a>
                    </div>
                    <div className="col-md-5 p-0">
                        <img src={Me} alt="" style={{width: '400px'}} className= 'rounded-circle mx-auto d-block'/>
                    </div>
                </div>
            </Container>
        <Skill/>
        <Project/>
        <Edu/>
        <Footer/>
    </section>
  )
}

export default Home