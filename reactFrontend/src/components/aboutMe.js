import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AboutMe extends React.Component {

    render() {

      let hStyle = {
        "text-align": 'center',
        "text-transform": 'uppercase',
    };
      let textStyle = {
        "text-align": 'left',
        
        "margin-right": 'auto',
        "margin-left": 'auto',
    };
     let secStyle = {
       "background-color": 'gray',
     }

        return (
          <div>
            <section id="1">
            <div class="d-flex h-100 align-items-center">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <header class="text-center">
                      <h2 style={hStyle}>About Me</h2>
                    </header>
                    <body  class="container text-center text-white">
                    <p style={textStyle}>I am a Colorado-based Product Manager turned Software Engineer trying to use technology to make a positive difference in the world. As an avid outdoorsman I'm passionate
                    about energy and the environment and preserving the world for future generations.</p>
                    <p style={textStyle}>I enjoy skiing, endurance sports, good food, travel, and travelling to ski, do endurance sports, or eat good food. My life goals include skiing and doing a race on every continent 
                    (Antarctica will be tough, both logistically and morally).</p>
                    <p style={textStyle}>I build this website as a way to get familiar with a variety of different technologies and frameworks. I used REACT for the front-end, Spring-Boot to pull data for the ISS feed below and am hosting
                    this in an AWS S3 bucket. Future items I'd like to add are putting this into a docker container and deploying it to EKS. Might be a bit much for a simple webpage, but learning new technologies is fun and there is no
                    kill like overkill.</p>
                    </body>
                   
                  </div>
                  <div class="col-lg-6"><img src="img/aboutMe.jpg" alt="The view from Torrey's Peak" class="center" height="300" width="300"/></div>
                </div>
              </div>
            </div>
          </section>
          </div>
        );
    }
}

export default AboutMe;
