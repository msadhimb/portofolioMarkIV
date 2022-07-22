import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Udinus from './udinus.jpg'

const Edu = () => {
  return (
    <section id='edu'>
      <Container style={{overflowX: 'hidden'}}>
          <h2 style={{paddingTop: '100px'}}>Education</h2>
          <div className="row d-flex justify-content-center mt-5 ">
              <div className="col-md-5 mt-3">
                  <img src={Udinus} alt="udinus" style={{width: '400px'}}/>
              </div>
              <div className="col-md-5  mt-3 text-start">
                  <h3>Universitas Dian Nuswantoro</h3>
                  <p>Universitas Dian Nuswantoro, the place where I was introduced to the world of programming before I fell in love with this world. This is where I developed the ability to think critically, problem solving, and of course my coding skill. For the first time I tried to make a line of code, I was very difficult to understand it, but precisely because it was difficult that I became challenged to master it, especially in the field of web developer.</p>
              </div>
          </div>
      </Container>
    </section>
  )
}

export default Edu