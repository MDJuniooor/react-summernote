import React, { Component } from 'react';
import './App.css';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles 
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale 

// Import bootstrap(v3 or v4) dependencies 
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Summernote</h1>
        </header>
        <form className="App-intro">
          I wanna attach summer-note here !
        </form>
      </div>
    );
  }
}

export default App;
