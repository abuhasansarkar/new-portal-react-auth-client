import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Header from '../components/Pages/Shared/Header/Header';
import LeftSide from '../components/Pages/Shared/LeftSide/LeftSide';
import RightSide from '../components/Pages/Shared/RightSide/RightSide';

const Main = () => {
     return (
          <div className=''>
          <div className="header sticky-top">
               <Header></Header>
          </div>
          <div className="container">
               <Row className='pt-4'>
                    <Col lg={2} className='d-none d-lg-block'>
                         <LeftSide></LeftSide>
                    </Col>
                    <Col lg={7}>
                         <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                         <RightSide></RightSide>
                    </Col>
               </Row>
          </div>
          <div className="footer">
               <Footer></Footer>
          </div>
          </div>
          
     );
};

export default Main;