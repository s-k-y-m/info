import React from 'react';
import $ from 'jquery';
import Info from './components/Info.jsx';
import KnownFor from './components/KnownFor.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      test: {knownfor_img: [],
        mentions: [],
        knownfor_desc: [],
      },
      button: true,
      hideButton: true
    };
    this.toggleButton = this.toggleButton.bind(this);
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
    this.toggleButton();
  }

  toggleButton() {
    var buttonState = this.state.button;

    if (buttonState === false) {
      buttonState = true;
      this.setState({
        button: true
      });
    } else {
      buttonState = false;
      this.setState({
        button: false
      });
    }
    this.showButton(buttonState);
  }

  showButton(flag) {
    if (flag === false) {
      if (this.state.test.mentions.length > 2) {
        for (var i = 2; i < this.state.test.mentions.length; i++) {
          var test2 = document.getElementsByClassName('known-desc');
          if (test2[i]) {
            test2[i].style.display = 'none';
          }
          this.setState({
            hideButton: false
          });
        }
      }
    } else {
      if (this.state.test.mentions.length > 2) {
        for (var i = 2; i < this.state.test.mentions.length; i++) {
          var test2 = document.getElementsByClassName('known-desc');
          if (test2[i]) {
            test2[i].style.display = 'inline-block';
          }
          this.setState({
            hideButton: false
          });
        }
      } 
    }
  }

  render () {

    if (this.state.button === false) {
      return (<div>
        <Info test={this.state.test} />
        <br></br><br></br><br></br>
        <KnownFor data={this.state.test} />
        <div className="button-box" hidden={this.state.hideButton}>
          <div className="known-button" button type="button" onClick={this.toggleButton}>SHOW ALL ({this.state.test.mentions.length})</div>
        </div>
      </div>);
    } else {
      return (<div>
        <Info test={this.state.test} />
        <br></br><br></br><br></br>
        <KnownFor data={this.state.test} />
        <div className="button-box" hidden={this.state.hideButton}>
          <div className="known-button" button type="button" onClick={this.toggleButton}>SHOW LESS</div>
        </div>
      </div>);
    }
  }
}

export default App;
