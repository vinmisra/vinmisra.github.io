import React, { Component } from 'react';
import {Icon, Button, Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarMenu, NavbarBrand } from 'bloomer';
import {Columns, Column, Notification, Container} from 'bloomer';
import {Hero, HeroHeader, HeroBody, Title, Subtitle} from 'bloomer';
import {Content} from 'bloomer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';

const colors = ['#209CEE', '#00D1B2', '#FF3860']
const radii = [20, 10, 5]
const linkValues = [0.001]
export class WorkGraph extends Component {
  render() {
    return(
      <div>
        <Container isFluid style={{ marginTop: 20 }}>
            <Notification isColor='light'>
              Browse Vinith's work experience, as a (almost) tripartite graph of buzzwords! Hover, click, drag, and zoom.
            </Notification>
        </Container>
        <Columns isCentered style={{marginTop:20, marginLeft: 20, marginRight: 20}}>
            <Column isSize='1/3'>
                <Notification isColor='info' hasTextAlign='centered'>
                  Organizations </Notification>
            </Column>
            <Column isSize='1/3'>
                <Notification isColor='primary' hasTextAlign='centered'>
                  Applications
                 </Notification>
            </Column>
            <Column isSize='1/3'>
                <Notification isColor='danger' hasTextAlign='centered'>
                 Technical tools
                </Notification>
            </Column>
        </Columns>
        <Columns isCentered >
            <Column isSize='1/2'>
            <InteractiveForceGraph
              simulationOptions={{ animate: true, height: 450, width: 600,
                strength: {
                        charge: -400
                      }}}
              zoom
              zoomOptions={{minScale: 1, maxScale: 10, onZoom: ()=>console.log('zoomed'), onPan: ()=>console.log('panned')}}
              highlightDependencies
              showLabels>
              {/* Node definitions */}
              {/*  Level 0 nodes*/}
              <ForceGraphNode node={{ id: 'Netflix', radius: radii[0] }} fill={colors[0]}/>
              <ForceGraphNode node={{ id: 'IBM Research', radius: radii[0] }} fill={colors[0]} />
              <ForceGraphNode node={{ id: 'Drawbridge', radius: radii[0] }} fill={colors[0]} />
              <ForceGraphNode node={{ id: 'Grad School', radius: radii[0] }} fill={colors[0]} />

              {/* Level 1 nodes */}
              <ForceGraphNode node={{ id: '\"Studio Production Science\"', radius: radii[1]}} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Customer service', radius: radii[1] }} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Chatbots', radius: radii[1] }} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Q&A', radius: radii[1]}} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Scheduling', radius: radii[1]}} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Video/audio/text classification', radius: radii[1]}} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'CTR/CVR modeling', radius: radii[1]}} fill={colors[1]} />
              <ForceGraphNode node={{ id: 'Knowledge graphs', radius: radii[1]}} fill={colors[1]} />

              {/* Level 2 nodes */}
              <ForceGraphNode node={{ id: 'NLP', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Information retrieval', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'ML for graphs', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Probabilistic programs', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Optimization', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Data science', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Frontend (Flask/React)', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'ML', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Computer vision', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Information theory', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Crowdsourcing', radius: radii[2]}} fill={colors[2]} />
              <ForceGraphNode node={{ id: 'Neural networks', radius: radii[2]}} fill={colors[2]} />

              {/* 0-1 links */}
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Netflix', target: '\"Studio Production Science\"' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Netflix', target: 'Customer service' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Netflix', target: 'Scheduling' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Netflix', target: 'Video/audio/text classification' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'IBM Research', target: 'Chatbots' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'IBM Research', target: 'Q&A' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'IBM Research', target: 'Knowledge graphs' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Drawbridge', target: 'CTR/CVR modeling' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Grad School', target: 'Information theory' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Grad School', target: 'ML' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Grad School', target: 'Information retrieval' }} />


              {/* 1-2 links */}
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Knowledge graphs', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Knowledge graphs', target: 'Information retrieval' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Knowledge graphs', target: 'ML for graphs' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Knowledge graphs', target: 'ML' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'CTR/CVR modeling', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'CTR/CVR modeling', target: 'ML' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Video/audio/text classification', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Video/audio/text classification', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Video/audio/text classification', target: 'ML' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Video/audio/text classification', target: 'Computer vision' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Video/audio/text classification', target: 'Crowdsourcing' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Scheduling', target: 'Optimization' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Scheduling', target: 'Frontend (Flask/React)' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Q&A', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Q&A', target: 'Information retrieval' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Q&A', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Q&A', target: 'Crowdsourcing' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Chatbots', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Chatbots', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Chatbots', target: 'Crowdsourcing' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Customer service', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Customer service', target: 'Information retrieval' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Customer service', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Customer service', target: 'ML' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Customer service', target: 'Crowdsourcing' }} />

              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'Probabilistic programs' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'Optimization' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'Data science' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'Frontend (Flask/React)' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'ML' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: '\"Studio Production Science\"', target: 'Crowdsourcing' }} />

              {/* 2-2 links */}
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Neural networks', target: 'NLP' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Neural networks', target: 'ML for graphs' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Neural networks', target: 'ML' }} />
              <ForceGraphArrowLink link={{ value: linkValues[0], source: 'Neural networks', target: 'Computer vision' }} />


            </InteractiveForceGraph>
            </Column>
        </Columns>

      </div>
    )
  }
}
