import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>
                        Welcome to code life.io
                    </h2>
                    <p>This is how to build a website with react, react router and react bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">
                            About
                    </Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <h3> frank </h3>
                        <p>
                            That's a croocked tree.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <h3> frank </h3>
                        <p>
                            That's a croocked tree.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <h3> frank </h3>
                        <p>
                            That's a croocked tree.
                        </p>
                    </Col>
                </Row>

            </Grid>
        )
    }
}
