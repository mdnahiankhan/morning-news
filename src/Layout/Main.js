import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Rightsidenav from '../Shared/RightSideNav/Rightsidenav';
import "../../src/Pages/Style/style.css"

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className=''>
                    <Col lg='2' className='d-none d-lg-block bd-toc' position={''}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3' className='bd-toc' >
                        <Rightsidenav></Rightsidenav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;