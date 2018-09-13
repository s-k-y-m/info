import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Info from './components/Info.jsx';
import KnownFor from './components/KnownFor.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      test: {knownfor_img: []},
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/restaurants/info',
      type: 'GET',
      contentType: 'application/json',
      success: (items) => { this.setRestaurant(items); },
      error: (error) => { console.log(error); },
    });
  }

  setRestaurant(data) {
    this.setState({
      test: data
    });
    console.log(this.state);
  }

  render () {
    return (<div>
      <Info test={this.state.test} />
      <br></br><br></br><br></br>
      <KnownFor data={this.state.test} />
    </div>);
  }
} 
// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
