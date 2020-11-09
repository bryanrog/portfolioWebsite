import React from 'react';
import './index.css';

class Footer extends React.Component {

    render() {
        return (
            <section>
            <div class="dark-overlay">
            <footer class="py-5 mt-5">
              <div class="row">
                <div class="col-lg-6 text-center text-lg-left">
                  <p class="font-italic mb-0 text-gray">&copy; 2020 Arctis Technologies, LLC. An Artics Company</p>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                  <p class="font-italic mb-0 text-gray">&copy; Template by <a href="https://bootstrapious.com/p/big-bootstrap-tutorial" class="text-gray">Bootstrapious</a></p>
                </div>
              </div>
              
            </footer>
            </div>
          
       
      </section>
        )   
     }
}

export default Footer;