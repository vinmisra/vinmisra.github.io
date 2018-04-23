import React, { Component } from 'react';

import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class DogBody extends Component {
  render() {
    const dogBody =
    <Container isFluid style={{ marginTop: 20 }}>
        <Notification isColor='primary'>Vinith <strong>really</strong> likes dogs.</Notification>
    </Container>;
    return(dogBody);
  }
}
