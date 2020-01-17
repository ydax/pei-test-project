import React from 'react'
import { connect } from 'react-redux' 

/** Instantiates UI Component */
const Dashboard = ( props ) => {

  /** Instantiates and formats variables used in UI Component */
  var timeUpdatedRaw;
  var timeUpdated;
  var usdRate;
  var gbpRate;
  var eurRate;
  var disclaimer;
  try {
    usdRate = props.exchangeRate.response.bpi['USD'].rate;
    gbpRate = props.exchangeRate.response.bpi['GBP'].rate;
    eurRate = props.exchangeRate.response.bpi['EUR'].rate;
    timeUpdatedRaw = props.exchangeRate.response.time.updatedISO;
    timeUpdated = new Date(timeUpdatedRaw).toString();
    disclaimer = props.exchangeRate.response.disclaimer;
  } catch (e) {
    usdRate = 'Loading...';
  }

  /////////////////////////////////////////////////////////////
  /////////////////// JSX FOR DASHBOARD ///////////////////////
  /////////////////////////////////////////////////////////////

  return (
    <main className="container section">
      <div className="card">
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width grey darken-3">
            <li className="tab">
              <a href="#usd" className="active">
                $USD
              </a>
            </li>
            <li className="tab">
              <a href="#gbp">£GBP</a>
            </li>
            <li className="tab">
              <a href="#eur">€EUR</a>
            </li>
          </ul>
        </div>
        <p id="basic-info">1 Bitcoin equals</p>
        <div className="card-content" id="rate-display">
          <div id="usd">${usdRate}</div>
          <div id="gbp">£{gbpRate}</div>
          <div id="eur">€{eurRate}</div>
        </div>
        <div className="card-content grey lighten-2">
          <p className="activator">
            Data last updated {timeUpdated}
            <i className="material-icons right">more_vert</i>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Disclaimer<i className="material-icons right">close</i>
            <p id="disclaimer">{disclaimer}</p>
          </span>
        </div>
      </div>
    </main>
  );
};
 
/** Brings in rate data from Redux store. */
const  mapStateToProps = (state) => {
  const exchangeRate = state;
  return {
    exchangeRate
  }
}

export default connect(mapStateToProps)(Dashboard)