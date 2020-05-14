import React from "react";
import "../styles/Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Header() {
    return (
        <Container>
            <Row>
                <Col >
                <div style = {{background:"green", width: "100%"}}>
                <h1 style={{textAlign: "center", width:"100%" ,}} >Kane Cruz-Walker</h1>
                <h2 style={{textAlign: "center", width:"100%" ,}} > Web Development and more</h2>
                </div>



                </Col>
            </Row>
        </Container>
    );
}

export default Header;