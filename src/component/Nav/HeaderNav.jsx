import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderNav.css'
import Particle from '../Particle/Particle';
import { motion } from 'framer-motion';

function HeaderNav() {
  return (
    <>
      <Navbar variant="dark" className='fixed-top nav' collapseOnSelect expand='lg'>
        <Container className='mt-2'>
          <div className="navBrand">
            <motion.h5 href="#about" className='text-white' style={{fontSize: 18,}}
              initial={{x: 250, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.7, type: 'spring'}}
            >Salman</motion.h5>
            <motion.h5 style={{marginLeft: 50, color: 'white', fontSize: 18, marginTop: -7}}
              initial={{x: -250, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.7, type: 'spring'}}
            >Adhim</motion.h5>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <motion.a href="#about" className='navlink btn'
                initial={{y: -250, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7, type: 'spring', delay: 0.5}}
              >About</motion.a>
              <motion.a href="#projects" className='navlink btn'
                initial={{y: -250, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7, type: 'spring', delay: 0.6}}
              >Projects</motion.a>
              <motion.a href="#edu" className='navlink btn'
                initial={{y: -250, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7, type: 'spring', delay: 0.7}}
              >Education</motion.a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    </>
  );
}

export default HeaderNav;