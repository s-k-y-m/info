import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Info from './components/Info.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      test: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/restaurants/info',
      type: 'GET',
      success: (items) => { console.log(items) },
      error: (error) => { console.log(error) },
    });
  }

  render () {
    return (<div>
      <h1>Test</h1>
      <Info test={this.state.test} />
    </div>);
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));