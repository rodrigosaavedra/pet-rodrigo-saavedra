import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const NavBar=({menu1,menu2,menu3,icocar})=>{
    
        return(
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href=''>{menu1}</Nav.Link>
                            <Nav.Link href=''>{menu2}</Nav.Link>
                            <Nav.Link href=''>{menu3}</Nav.Link>
                            <Nav.Link href=''>{icocar}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        )
    
}
export default NavBar;