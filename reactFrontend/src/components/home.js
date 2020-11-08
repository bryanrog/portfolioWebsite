import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Homescreen extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {i: 0,
    about: props.summary,
    };
    
  }

  componentDidMount(){
    setInterval(() =>{let currenti = this.state.i; 
      this.setState({i:currenti+1});}, 5000);
  }
  
  componentWillUnmount(){
    clearInterval(this.i);
  }

    render() {

        let aboutByline = this.state.about[this.state.i %this.state.about.length];
        return (
            <section class="bg-cover bg-center hero">
            <div class="dark-overlay"></div>
            <div class="position-relative z-index-1">
              <div class="container text-center text-white">
                <p style={{color: 'white'}} class="font-italic lead">Oh, hello, nice to meet you!</p>
                <h1 style={{color: 'white'}} class="text-uppercase my-4">My name is Bryan</h1>
                <p style={{color: 'white'}} class="font-italic lead">{aboutByline}</p>
                
              </div>
            </div>
            <div class="scroll-btn link-scroll"><i class="fas fa-angle-double-down"></i></div>
          </section>
      
        );
    }
}


class RunHomescreen extends React.Component {

  
    render() {
      const summary = ["Skier", "Endurance Athlete", "Steak Enthusiast", "Extraordinaire"];
      
      return (
        
        <Homescreen
          summary = {summary}
        />
      );
    }
}

export default RunHomescreen;
