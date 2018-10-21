import React, { Component } from 'react';
import './App.css';
import GalleryDetailsComponent from './component/GalleryDetailsComponent';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <GalleryDetailsComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
