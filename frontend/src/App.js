import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './containers/Layout';
import BaseRouter from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout >
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;