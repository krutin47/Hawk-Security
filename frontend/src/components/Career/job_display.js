import React from 'react';
import '../../main.css';

function job_display() {
    return (
        <React.Fragment>
            {/* <div className="headerMain">
            <div className="wrapper clearfix">
                <div className="siteNavigation fr">
                    <Link to="/job_display">JOB DISPLAY</Link>
                </div>
            </div>
          </div> */}

        
            <div className="card">
  <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
  <h1>Tailored Jeans</h1>
  <p>$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>
        </React.Fragment>    
    )
}

export default job_display