import { Col, Container, Row } from "react-bootstrap";
import {Outlet} from 'react-router-dom'
import AdminSideBar from "./AdminSideBar";

export default function Admin(){



    return(
        <>
            <Container >
                <Row className='py-3'>
                    <Col sm="4" xs="3" md="2">
                        <AdminSideBar />
                    </Col>

                    <Col sm="8" xs="8" md="10">
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}