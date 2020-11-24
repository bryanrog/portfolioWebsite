import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


class WorldMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        lat: props.lat ,
        long: props.long,
        Xo: 0,
        Yo: 0,
        Xmult: 16/3,
        Ymult: 14/3,
        X: "50%",
        Y: "50%", 
        

        };
        
      }

       componentDidMount() {
        console.log("Trying to mount");
        this.updateIssCoordinates();
        setInterval(() => {
            this.updateIssCoordinates();
        }, 360000);
      }

      async updateIssCoordinates() {
        let externalurl = "http://portfoliowebsite-env.eba-ck36a2n4.us-east-2.elasticbeanstalk.com/issLocations/1";
        let realtiveurl = '/issLocations/1';
        console.log("Calling fetch");
        let response = await fetch(realtiveurl, {headers:{'Content-Type': 'application/json'}});
        console.log(response);
        //console.log(response.text())
        let body = await response.json();
        console.log("Body is: ")
        console.log(body);
        
        this.setState({Y : ((body.currentLatitude + 90) / 1.8) + "%"});
        this.setState({X: ((body.currentLongitude + 180) /3.6 ) + '%' });
        
        console.log(this.state.X);
        console.log(this.state.Y);
      }


    render() {
       
        let divStyle = {
           bottom: (this.state.Y),
           left: (this.state.X),
            position: 'absolute',
             
            
        };

        let hStyle = {
            "text-align": 'center',
            "text-transform": 'uppercase',
        };

        let caption = "I'm in space!";
        let iss = "/img/iss2.jpg";
        return (
            <div>
            <section>
            <div class="dark-overlay"></div>
                <header>
                    <h2 style={hStyle}>Where is the ISS Currently?</h2>
                </header> 
            </section>
            <section class = "bg-cover bg-center map">
            <div class="dark-overlay"></div>
            <div class="position-relative z-index-1">
            <div style = {divStyle} title={caption}>
                <img src ={iss} alt = "ISS" height="50" width="100"  />   
            </div>
            </div>
            
            </section>
            </div>
        );
    }

}


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        lat: 0 ,
        long: 0,

        };
        
      }

      
      
     
  
    
    render () {
        
        return (
        
            <WorldMap 
                lat = {this.state.lat}
                long = {this.state.long}
            />
        );
    }
}

export default Display;