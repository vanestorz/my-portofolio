import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { relative } from 'path';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
            <div className="projects-grid">
                <Grid>
                <Cell col={12} tablet={12} phone={12}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share " />
                </CardMenu>
                </Card>
                </Cell>
                </Grid>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
            <div className="projects-grid">
            <Grid>
                <Cell col={4} tablet={12} phone={12}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share " />
                </CardMenu>
                </Card>
                </Cell>

                <Cell col={4} tablet={12} phone={12}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share " />
                </CardMenu>
                </Card>
                </Cell>

                <Cell col={4} tablet={12} phone={12}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share " />
                </CardMenu>
                </Card>
                </Cell>
            </Grid>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Grid>
                    <Cell col={12} tablet={12} phone={12}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share " />
                    </CardMenu>
                    </Card>
                    </Cell>
                    </Grid>
                </div>
                )
        }
    }

    render() {
        return(
        <div className="abso">
            <div className="category-tabs" style={{fontFamily: "Oxygen", backgroundColor: "white"}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>System Engineer</Tab>
                    <Tab>Security</Tab>
                </Tabs>
                    <div className="content">{this.toggleCategories()}</div>
            </div>  
        <Footer size="mini" className="footer">
        <FooterSection type="left" logo="andhikahs.tech">
            <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
        </Footer>
        </div>     
        )
    }
}

export default Projects;