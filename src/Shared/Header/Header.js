import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AauthContext } from '../../Pages/News/News/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import "../../Pages/Style/style.css"


const Header = () => {
    const { user, logout } = useContext(AauthContext);

    const handleError = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="" className='sticky-top'>
            <Container>
                <Navbar.Brand><Link className='btn btn-light' to='/' bg="light">Morning News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex gap-3'>
                        <>
                            {user?.uid ?
                                <>
                                    <span className='text-black'>{user?.displayName}</span>
                                    <Button variant='light' onClick={handleError}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login' className='btn btn-danger'>Login</Link>
                                    <Link className='btn btn-info' to='/register'>Register</Link>
                                </>
                            }
                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL} title={user?.displayName}>
                                </Image> :
                                <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;