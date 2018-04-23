import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Icon, Button, Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarMenu, NavbarBrand } from 'bloomer';
import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {AboutBody} from './About.jsx';
import {DogBody} from './Dog.jsx';
import {Header} from './Header.jsx';
import {WorkGraph} from './WorkGraph.jsx';

export class TestMainPage extends Component {
  render() {
    return(
      <MainPage
        pageBody={<WorkGraph/>}
        onNavClick={(selectedLink)=>console.log(selectedLink)}
      />
    )
  }
}

export class MainPage extends Component {
  static propTypes = {
    pageBody: PropTypes.object.isRequired,
    onNavClick: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Header
            onNavClick={this.props.onNavClick}
          />
          {this.props.pageBody}
      </div>
    );
  }
}




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
