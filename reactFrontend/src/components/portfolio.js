import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Portfolio extends React.Component {

    render() {

      let hStyle = {
        "text-align": 'center',
        "text-transform": 'uppercase',
    };
        return (
            <section>
        <div class="d-flex h-100 align-items-center">
          <div class="container">
            <header class="text-center mb-5">
              <h2 style={hStyle}>Portfolio</h2>
            </header>
            <div class="row">
              <div class="col-lg-12 text-center">
                <p>You can make also a portfolio or image gallery.</p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-1.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-1.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-2.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-2.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-3.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-3.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-4.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-4.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-5.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-5.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
              <div class="col-lg-4 col-md-6 mb-4"><a href="img/portfolio-6.jpg" data-lightbox="image-1" data-title="My caption" class="d-block mb-1"><img src="img/portfolio-6.jpg" alt="..." class="img-fluid d-block mx-auto"/></a></div>
            </div>
          </div>
        </div>
      </section>
      
        );
    }
}

export default Portfolio;
