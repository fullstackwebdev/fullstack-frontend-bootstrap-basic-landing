import React, { Component } from 'react';
import './News.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';



export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image" />
                <Grid>
                    <h2>
                        News
                    </h2>
                    <Row>
                        <Col cs={12} sm={8} className="main-section">
                            <p>blah blah blah blah blah</p>
                            <p>blah blah blah blah blah</p>
                            <p>blah blah blah blah blah</p>
                            <p>blah blah blah blah blah</p>
                        </Col>
                        <Col cs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg" />
                            <p>blah blah blah blah blah</p>
                        </Col>

                    </Row>
                </Grid>
            </div>
        )
    }
}
