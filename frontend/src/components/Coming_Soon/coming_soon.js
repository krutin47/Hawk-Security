import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Coming_soon() {
  
  return (
    <React.Fragment>
      {/* //? Suggetion :: Need to Bigger the view or add an image to make it more attractive */}
      {/* <!-- 1  coloumn  Section--> */}
      <section id="contact_us" className="oneColumnSection p100-0 forUp">
        <div className="wrapper">
          <div className="text-center wow fadeInDown">
            <h3>Coming Soon</h3>
            <div className="p40-0 forSmallWidth light">
              {/* //TODO :: Add content in the P tag */}
              <p>We are currently working on this page! <br></br>
                  It will be available soon..!
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Coming_soon;