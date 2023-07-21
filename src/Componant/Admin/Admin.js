import { Col, Container, Row } from "react-bootstrap";
import {Outlet, Route, Routes, redirect} from 'react-router-dom'
import AdminSideBar from "./AdminSideBar";
import AddProducts from "./AddProducts";
import Router from "../../pages/Router";
import AdminRouter from "../../pages/AdminRouter";
import AdminAllProducts from "./AllProducts";
import AllOrders from "./AllOrders";
import AddCategory from "./AddCategory";

export default function Admin(){



    return(
        <>
            <Container >
                <Row className='py-3'>
                    <Col sm="3" xs="2" md="2">
                        <AdminSideBar />
                    </Col>

                    <Col sm="9" xs="10" md="10">
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}