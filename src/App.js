import React, { Component } from 'react';
import './App.css';
// import HookCounter from './Main/UseStateHook/HookCounter';
import HookCounter2 from './Main/UseStateHook/HookCounter2';
import HookCounter3 from './Main/UseStateHook/HookCounter3';
import HookCounter4 from './Main/UseStateHook/HookCounter4'
class App extends Component {
  render() {
    return (
      <div className = "App">
        {/*main page */}
        <HookCounter2 />
        <HookCounter3 />
        <HookCounter4 />


      </div>
    )
  }
}

export default App

