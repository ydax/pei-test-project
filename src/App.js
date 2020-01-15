import React from 'react';
import RateDisplay from './components/RateDisplay'
import CurrencySelection from './components/CurrencySelection'
import AboutTheApp from './components/AboutTheApp'

function App() {
  return (
    <div className="App">

      <main class="container section">
        <div class="row">
          <RateDisplay />

          <div class="row col s12 offset-l2 l6">
              <CurrencySelection />
              <AboutTheApp />
          </div>
        </div>
      </main>
    

    </div>
  );
}

export default App;
