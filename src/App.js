import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Signin from './components/signin/signin';
import FilteredList from './components/landing';
import FilteredList2 from './components/landing2';
import Register from './components/signin/register';
import 'tachyons';
const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      role: 'signin'
    }
  }
  onRouteChange = (route, role) => {
    this.setState({ route: route });
    this.setState({ role: role });
  }


  render() {
    return (

      <div className="App">

        <Navigation onRouteChange={this.onRouteChange} />
        <Particles className='particles'
          params={particlesOptions}
        />
        {this.state.route === 'signin' ?
          <div >
            <Logo />
            <Signin onRouteChange={this.onRouteChange} onRoleChange={this.onRoleChange} /></div> :
          this.state.route === 'signup' ?
            <div>
              <Logo />
              <Register onRouteChange={this.onRouteChange} /></div> :
            this.state.route === 'dl' ?
              <FilteredList /> :
              this.state.route === 'vl' ?
                <FilteredList2 /> :
                <div >
                  <Logo />
                  <Signin onRouteChange={this.onRouteChange} onRoleChange={this.onRoleChange} /></div>
        }
      </div>
    );
  }
}

export default App;
/*
 <Particles className='particles'
          params={particlesOptions}
        />
*/
