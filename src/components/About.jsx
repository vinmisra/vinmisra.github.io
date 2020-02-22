import React, { Component } from 'react';
import headshot_far from '../res/headshot_far.JPG';
import headshot_close from '../res/headshot_close.JPG';
import headshot_med from '../res/headshot_med.JPG';
import CV from '../res/CV_10_16_19 (1).pdf';

import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class AboutBody extends Component {
  render() {
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

     return(aboutBody);
  }
}
