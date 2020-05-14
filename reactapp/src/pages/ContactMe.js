import React from "react";
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import image from "../images/image1.jpeg"
import Header from "../components/Header"
import AskMe from "../components/contactForm"

function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header/>

                        <Row>

                            <Col size="md-12" style={{width: "100%"}}>
                                <h2 style={{textAlign: "center", width:"100%"}}>Contact Me area</h2>

                                <AskMe/>
                            </Col>
                        </Row>




                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Contact;