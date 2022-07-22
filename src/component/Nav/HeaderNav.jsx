import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeaderNav.css'
import Particle from '../Particle/Particle';

function HeaderNav() {
  return (
    <>
      <Navbar variant="dark" className='fixed-top nav' collapseOnSelect expand='lg'>
        <Container className='mt-2'>
          <Navbar.Brand href="#home" className='text-white'>Salman <br /> <span className='ms-5'>Adhim</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className='navlink'>About</Nav.Link>
              <Nav.Link href="#projects" className='navlink'>Projects</Nav.Link>
              <Nav.Link href="#edu" className='navlink'>Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    </>
  );
}

export default HeaderNav;