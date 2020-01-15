import React from 'react';

const AboutTheApp = () => {
    return (
      <div id="aboutTheApp">
        <h5>About the App</h5>
        <ul class="tabs">
          <li class="tab col s6">
            <a href="#operations">Stack</a>
          </li>
          <li class="tab col s6">
            <a href="#communication">Features</a>
          </li>
        </ul>
        <div class="col s12 card" id="operations">
          <div class="card-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              commodi dolor, distinctio blanditiis eum sed voluptates
              perferendis doloribus et nam modi dignissimos quis pariatur
              mollitia odit explicabo? Nemo, veniam harum?
            </p>
          </div>
        </div>
        <div class="col s12 card" id="communication">
          <div class="card-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              minima consequuntur accusamus exercitationem, facere illo neque
              ipsam eveniet optio eos provident illum doloribus rerum
              voluptatem, dolores distinctio cupiditate voluptatum veniam?
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default AboutTheApp;