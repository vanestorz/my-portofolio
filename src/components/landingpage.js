import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.imgur.com/Dn2RIGX.png"
                            alt="avatar"
                            className="avatar-img-landing"
                        />

                        <div className="banner-text">
                            <h1>System Engineer</h1>

                        <hr/>

                        <p>Continous Integration | Continuous Deployment | Docker | Jenkins | Vulnerability Assessment | Penetration Testing</p>

                        <div className="social-links">
                        {/* LinkedIn */}
                            <a href="https://andhikahs.tech" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                        {/* Github */}
                            <a href="https://andhikahs.tech" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        {/* Facebook */}
                            <a href="https://andhikahs.tech" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>    
                        {/* Instagram */}
                            <a href="https://andhikahs.tech" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;