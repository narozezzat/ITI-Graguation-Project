import { Col, Container, Row } from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import SellerSideBar from "./SellerSideBar";

export default function Seller(){



    return(
        <>
            <Container >
                <Row className='py-3'>
                    <Col sm="3" xs="2" md="2">
                        <SellerSideBar />
                    </Col>

                    <Col sm="9" xs="10" md="10">
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}