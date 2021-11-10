import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Contact from './contact';
import History from './history';
import Links from './links';
import News from './news';
import Schedule from './schedule';
import Stats from './stats';
import {PhotoGallery} from './photogallery';
import Team from './team';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div style={{marginLeft: '10vw', marginRight: '10vw'}}>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                // className="mr-auto my-2 my-lg-0"
                                style={{ padding: 10, marginTop: 20, marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.7)' }}
                                navbarScroll

                            >
                                <Nav.Link style={{margin: 10}} as={Link} to="/home">Home</Nav.Link>
                                {/* <Nav.Link style={{margin: 10}} as={Link} to="/news">News</Nav.Link> */}
                                {/* <Nav.Link style={{margin: 10}} as={Link} to="/history">History</Nav.Link> */}
                                <Nav.Link style={{margin: 10}} as={Link} to="/stats">Stats</Nav.Link>
                                <Nav.Link style={{margin: 10}} as={Link} to="/schedule">Schedule</Nav.Link>
                                <Nav.Link style={{margin: 10}} as={Link} to="/team">Team</Nav.Link>
                                {/* <Nav.Link style={{margin: 10}} as={Link} to="/links">Links</Nav.Link> */}
                                <Nav.Link style={{margin: 10}} as={Link} to="/gallery">Photo Gallery</Nav.Link>
                                <Nav.Link style={{margin: 10}} as={Link} to="/contact">Contact Us</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div style={{marginLeft: '10vw', marginRight: '10vw', display: 'flex', flexDirection: 'column', }}>
                    <Switch>
                        {/* <Route path="/history">
                            <History />
                        </Route> */}
                        {/* <Route path="/links">
                            <Links/>
                        </Route> */}
                        {/* <Route path="/news">
                            <News/>
                        </Route> */}
                        <Route path="/gallery">
                            <PhotoGallery/>
                        </Route>
                        <Route path="/schedule">
                            <Schedule/>
                        </Route>
                        <Route path="/stats">
                            <Stats/>
                        </Route>
                        <Route path="/team">
                            <Team/>
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}