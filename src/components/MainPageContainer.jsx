import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AboutBody} from './About.jsx';
import {DogBody} from './Dog.jsx';
import {Header} from './Header.jsx';
import {WorkGraph} from './WorkGraph.jsx';
import {MainPage} from './MainPage.jsx';

export class TestMainPageContainer extends Component {
  render() {
    return(
      <MainPageContainer/>
    )
  }
}

export class MainPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageBody:<AboutBody/>
    }
  }
  render() {
    return (
      <MainPage
        pageBody={this.state.pageBody}
        onNavClick={(selectedLink)=>{
            if (selectedLink === 'about'){
                this.state.pageBody = <AboutBody/>;
            } else if (selectedLink === 'work') {
                this.state.pageBody = <WorkGraph/>;
            } else if (selectedLink === 'dogs') {
                this.state.pageBody = <DogBody/>;
            };
            this.setState(this.state);
        }}
      />
    );
  }
}
