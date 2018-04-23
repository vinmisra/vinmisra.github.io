import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Icon, Button, Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarMenu, NavbarBrand } from 'bloomer';
import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class Header extends Component {
  static propTypes = {
    onNavClick: PropTypes.func.isRequired
  }
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
                <Button id="about" isColor='info'
                  onClick={(event)=>this.props.onNavClick("about")}>
                    <span>About</span>
                </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="work" isColor='success'
                    onClick={(event)=>this.props.onNavClick("work")}>
                      <span>Work</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="film" isColor='danger' href='https://letterboxd.com/vinmisra/'>
                      <span>Film</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="blog" isColor='warning' href='https://medium.com/vinblog'>
                      <span>Blog</span>
                  </Button>
              </NavbarItem>
              <NavbarItem href='#/'>
                  <Button id="dogs" isColor='primary'
                    onClick={(event)=>this.props.onNavClick("dogs")}>
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

    return(header);
  }
}
