import React, { Component } from "react";
import Aux from './components/hoc/Aux';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
class App extends Component {
  render () {
    return (
      <Aux>
        <Layout>
         <Home/>
        </Layout>
        
      </Aux>
    );
  }

}


export default App;