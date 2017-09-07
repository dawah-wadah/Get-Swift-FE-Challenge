import React, { Component } from 'react';
import Header from './components/header';
import Map from './components/map';
import SideBar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='body'>

        <SideBar />
        <Map />
      </div>
      </div>
    );
  }
}

export default App;
