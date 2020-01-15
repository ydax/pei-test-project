import React from 'react';

const CurrencySelection = () => {
    return (
      <div>
        <h3>Select Currency</h3>
        <p>You can select any currency supported by Coindesk's API below.</p>
        <div class="row center" id="currency-selector">
          <div class="col l6" id="dropdown">
            <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
              <i class="material-icons left">attach_money</i>Select Currency
            </a>
            <ul id="dropdown1" class="dropdown-content">
              <li>
                <a href="#!">one</a>
              </li>
              <li>
                <a href="#!">two</a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#!">three</a>
              </li>
              <li>
                <a href="#!">
                  <i class="material-icons">view_module</i>four
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="material-icons">cloud</i>five
                </a>
              </li>
            </ul>
          </div>
          <div class="col l6" id="refresh">
            <a class="waves-effect waves-light btn">
              <i class="material-icons left">autorenew</i>Refresh Data
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default CurrencySelection;