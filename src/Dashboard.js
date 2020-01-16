import React, { createContext, useReducer, useEffect } from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rateReducer } from './RateReducer'
import fetchDataWatcher from './sagas' 
import { store } from './index'

/** Instantiates UI Component */
const Dashboard = () => {

  /////////////////////////////////////////////////////////////
  /////////////////// JSX FOR DASHBOARD ///////////////////////
  /////////////////////////////////////////////////////////////

  return (
    <main className="container section">
      <div className="row">
        {/** Displays Rate Information */}
        <div className="col s12 l4">
          <div className="row">
            <h3>Rate</h3>
          </div>
          <div className="row">
            <div className="card-panel blue">
              <p className="center" id="rate-display">
                25
              </p>
            </div>
          </div>
        </div>

        {/** Enables User to Select a Currency */}
        <div className="row col s12 offset-l2 l6">
          <div>
            <h3>Select Currency</h3>
            <p>
              You can select any currency supported by Coindesk's API below.
            </p>
            <div className="row center" id="currency-selector">
              <div className="col l6" id="dropdown">
                <a
                  className="dropdown-trigger btn"
                  href="#"
                  data-target="dropdown1"
                >
                  <i className="material-icons left">attach_money</i>Select
                  Currency
                </a>
                <ul id="dropdown1" className="dropdown-content">
                  <li>
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                  <li className="divider" tabIndex="-1"></li>
                  <li>
                    <a href="#!">three</a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="material-icons">view_module</i>four
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="material-icons">cloud</i>five
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l6" id="refresh">
                <a
                  className="waves-effect waves-light btn"
                >
                  <i className="material-icons left">autorenew</i>Refresh Data
                </a>
              </div>
            </div>
          </div>

          {/** Shares Information about the App */}
          <div id="aboutTheApp">
            <h5>About the App</h5>
            <ul className="tabs">
              <li className="tab col s6">
                <a href="#operations">Stack</a>
              </li>
              <li className="tab col s6">
                <a href="#communication">Features</a>
              </li>
            </ul>
            <div className="col s12 card" id="operations">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  commodi dolor, distinctio blanditiis eum sed voluptates
                  perferendis doloribus et nam modi dignissimos quis pariatur
                  mollitia odit explicabo? Nemo, veniam harum?
                </p>
              </div>
            </div>
            <div className="col s12 card" id="communication">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  minima consequuntur accusamus exercitationem, facere illo
                  neque ipsam eveniet optio eos provident illum doloribus rerum
                  voluptatem, dolores distinctio cupiditate voluptatum veniam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
 
export default Dashboard;