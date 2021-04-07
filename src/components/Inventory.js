import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../components/styles/owner.css'
const Inventory = () => {
    return(
        <Container>
            <Row>
                <Col className="inventory">1</Col>
                <Col className="inventory">2</Col>
                <Col className="inventory">3</Col>
            </Row>
            <Row>
                <Col className="inventory">4</Col>
                <Col className="inventory">5</Col>
                <Col className="inventory">6</Col>
            </Row>
        </Container>
    );
}

export default Inventory