import React, { Component } from 'react';
import './App.css';
import './../node_modules/bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import headshot_far from './res/headshot_far.JPG';
import headshot_close from './res/headshot_close.JPG';
import headshot_med from './res/headshot_med.JPG';
import CV from './res/CV_11_13_17.pdf';
import {Icon, Button, Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarMenu, NavbarBrand } from 'bloomer';
import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    const header =
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarBrand>
          <NavbarItem>
              Vinith Misra
          </NavbarItem>
      </NavbarBrand>
      <NavbarMenu isActive={true}>
          <NavbarStart>
              <NavbarItem href='#/'>
                <Button id="about" isColor='info'>
                    <span>About</span>
                </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="work" isColor='success'>
                      <span>Work</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="film" isColor='danger'>
                      <span>Film</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="blog" isColor='warning'>
                      <span>Blog</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="dogs" isColor='primary'>
                      <span>Dogs</span>
                  </Button>
              </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
              <NavbarItem href="https://github.com/vinmisra" isHidden='touch'>
                  <Icon icon='github' />
              </NavbarItem>
              <NavbarItem href="https://twitter.com/VinMisra" isHidden='touch'>
                  <Icon icon='twitter'/>
              </NavbarItem>
              <NavbarItem href="https://www.linkedin.com/in/vinmisra/" isHidden='touch'>
                  <Icon icon='linkedin-square'/>
              </NavbarItem>
          </NavbarEnd>
      </NavbarMenu>
      </Navbar>;

    const aboutBody =
    <Grid fluid>
       <Row style={{marginTop:"100px"}}>
          <Col md={3} style={{}}>
            <img src={headshot_far} style={{margin: "auto", display: "block", borderRadius:"50%", width:"50%"}}/>
          </Col>
          <Col md={6}>
            <Title> Low Rate Description </Title>
            <Subtitle> Vinith is a "data scientist" at Netflix. </Subtitle>
          </Col>
       </Row>
       <Row style={{marginTop:"100px"}}>
          <Col md={3} style={{}}>
            <img src={headshot_med} style={{margin: "auto", display: "block", borderRadius:"50%", width:"50%"}}/>
          </Col>
          <Col md={6}>
            <Title> Medium Rate Description </Title>
            <Subtitle> Vinith fiddles with data science, machine learning,
            natural language, optimization, and other buzzwords at Netflix.
            He was previously a "research staff member" at IBM Watson.
            </Subtitle>
          </Col>
       </Row>
       <Row style={{marginTop:"100px"}}>
          <Col md={3} style={{}}>
            <img src={headshot_close} style={{margin: "auto", display: "block", borderRadius:"50%", width:"50%"}}/>
          </Col>
          <Col md={6}>
            <Title> High Rate Description </Title>
            <Subtitle> See <a href={CV}> this </a> or contact Vinith. </Subtitle>
          </Col>
       </Row>
     </Grid>;
    return (
      <div>
          {header}
          {aboutBody}
      </div>
    );
  }
}

export default App;



// <Grid fluid>
//   <Row>
//     <Col xs={6} md={3}>
//       Hello, world!
//     </Col>
//   </Row>
// </Grid>

// <Container hasTextAlign='centered'>
//
//     <img src={headshot} style={{borderRadius:"50%"}}/>
//     <Title></Title>
// </Container>
// <img src={headshot} style={{ marginRight: 5, borderRadius:"50%", height:"150%" }} />
