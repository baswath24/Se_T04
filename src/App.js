import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Signin from './components/signin/signin';
import FilteredList from './components/landing';
import FilteredList2 from './components/landing2';
import FilteredListNGO from './components/landing3';
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
      user: {
        name: 'karthik',
        email: 'karthik@gmail.com'
      }
    }
  }



  onRouteChange = (route) => {
    this.setState({ route: route });

  }
  loadUser = (name, email) => {
    this.setState({ user: { name, email } });
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
            <div className='m-5'>
              <Logo />
            </div>
            <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} /></div> :
          this.state.route === 'signup' ?
            <div className='float-left'>

              <Logo />

              <Register onRouteChange={this.onRouteChange} /></div> :
            this.state.route === 'dl' ?
              <FilteredList n={this.state.user} /> :
              this.state.route === 'vl' ?
                <FilteredList2 n={this.state.user} /> :
                this.state.route === 'nl' ?
                  <FilteredListNGO n={this.state.user} /> :
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
