import React, { Component } from 'react';
import './App.css';
import './../node_modules/bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
// import headshot_far from './res/headshot_far.JPG';
// import headshot_close from './res/headshot_close.JPG';
// import headshot_med from './res/headshot_med.JPG';
// import CV from './res/CV_11_13_17.pdf';
import {Icon, Button, Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarMenu, NavbarBrand } from 'bloomer';
import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {MainPage, TestMainPage} from './components/MainPage.jsx';
import {MainPageContainer, TestMainPageContainer} from './components/MainPageContainer.jsx';

class App extends Component {
  render() {
    return (
      <div>
          <TestMainPageContainer/>
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
