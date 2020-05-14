import React from "react";
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import image from "../images/image1.jpeg"
import Header from "../components/Header"
import Project from "../components/Project"
import projects from "../projects.json"


function Portfolio() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header />

                        <Row>
                            <Col size="md-12" style={{ width: "100%" }}>
                                <h2 style={{ textAlign: "center", width: "100%" }}>Portfolio Area</h2>


                                <Project
                                    name={projects[0].name}
                                    description={projects[0].description}
                                    image={projects[0].image} />
                                <Project
                                    name={projects[1].name}
                                    description={projects[1].description}
                                    image={projects[1].image} />
                                <Project
                                    name={projects[2].name}
                                    description={projects[2].description}
                                    image={projects[2].image} />
                                <Project
                                    name={projects[3].name}
                                    description={projects[3].description}
                                    image={projects[3].image} />
                                <Project
                                    name={projects[4].name}
                                    description={projects[4].description}
                                    image={projects[4].image} />
                                <Project
                                    name={projects[5].name}
                                    description={projects[5].description}
                                    image={projects[5].image} />

                            </Col>
                        </Row>






                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Portfolio;