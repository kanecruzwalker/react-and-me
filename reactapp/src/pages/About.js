import React from "react";
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import image from "../images/image1.jpeg"
import Header from "../components/Header"


function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header/>

                        <Row>
                            <Col size="md-6">
                                        <Image src={image} roundedCircle style={{width: '18rem', height:'18rem', marginBottom: '2rem', }}  />
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            New to web development with a lot to learn. 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col size="md-6" style={{width: "100%"}}>
                                <h2 style={{textAlign: "center", width:"100%"}}>WHy am I a web developer?</h2>
                            </Col>
                        </Row>




                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default About;