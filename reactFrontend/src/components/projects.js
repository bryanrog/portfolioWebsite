import React from 'react';
import './index.css';

class Projects extends React.Component {

    render() {
      let hStyle = {
        "text-align": 'center',
        "text-transform": 'uppercase',
    };
        return (
            <section class="bg-gray">
        <div class="d-flex h-100 align-items-center">
          <div class="container">
            <header class="mb-5 text-center">
              <h2 style={hStyle}>Services</h2>
            </header>
            <div class="row text-center">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="fas fa-desktop"></i></div>
                <h4 class="text-uppercase lined lined-compact">Web design</h4>
                <p class="text-mted">Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="fas fa-print"></i></div>
                <h4 class="text-uppercase lined lined-compact">Print</h4>
                <p class="text-mted">Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="fas fa-globe-americas"></i></div>
                <h4 class="text-uppercase lined lined-compact">SEO and SEM</h4>
                <p class="text-mted">Am terminated it excellence invitation projection as. She graceful shy.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="far fa-lightbulb"></i></div>
                <h4 class="text-uppercase lined lined-compact">consulting</h4>
                <p class="text-mted">Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="far fa-envelope"></i></div>
                <h4 class="text-uppercase lined lined-compact">Email marketing</h4>
                <p class="text-mted">Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="icon mb-3"><i class="fas fa-user"></i></div>
                <h4 class="text-uppercase lined lined-compact">UI &amp; UX</h4>
                <p class="text-mted">Am terminated it excellence invitation projection as. She graceful shy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        );
    }
}

export default Projects;