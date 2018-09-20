import React from 'react';
import $ from 'jquery';
import Info from './components/Info.jsx';
import KnownFor from './components/KnownFor.jsx';
import styles from '../../public/info.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      test: { "_id":"5ba1b12b0129ac786856e5de", "knownfor_img":[ "./assets/knownfor/takeout.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/kids.svg" ], "knownfor_desc":[ "ipsam numquam velit", "quia ea doloremque", "et eaque est", "reprehenderit vel ipsam", "ut nostrum animi" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/superoutman/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/wintopia/128.jpg" ], "id":"5ba1b12b0129ac786856e57a", "name":"Rau, O'Conner and Franecki", "category":"Unbranded Frozen Pants", "desc":"dynamic whiteboard systems", "location":"North Romanstad", "expense":"$$", "food_rating":3.9, "decor_rating":5.4, "service_rating":3.1, "desc_bold":"Et quia rerum. Saepe neque optio quo maiores.", "__v":0 },  
      button: true,
      hideButton: true,
      id: '5ba1b12b0129ac786856e5de',
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    this.getRestaurants();
  }
  
  getRestaurants() {
    $.ajax({
      url: '/restaurants/all',
      type: 'GET',
      contentType: 'application/json',
      success: (items) => { 
        var randNum = Math.floor(Math.random() * items.length);
        this.setState({
          id: items[randNum].id
        });
        $.ajax({
          url: `/restaurants/info/${this.state.id}`,
          type: 'GET',
          contentType: 'application/json',
          success: (items) => {
            this.setState({
              test: items
            });
            this.toggleButton();
          },    
          error: (error) => { console.log(error); },
        });
      },
      error: (error) => { console.log(error); }
    });
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
    if (this.state.id && flag === false) {
      if (this.state.test.mentions.length > 2) {
        for (var i = 2; i < this.state.test.mentions.length; i++) {
          var mentionBox = document.getElementsByClassName(styles.knownDesc);
          if (mentionBox[i]) {
            mentionBox[i].style.display = 'none';
          }
          this.setState({
            hideButton: false
          });
        }
      }
    } else if (this.state.id && flag === true) {
      if (this.state.test.mentions.length > 2) {
        for (var i = 2; i < this.state.test.mentions.length; i++) {
          var mentionBox = document.getElementsByClassName(styles.knownDesc);
          if (mentionBox[i]) {
            mentionBox[i].style.display = 'inline-block';
          }
          this.setState({
            hideButton: false
          });
        }
      } 
    }
  }

  render () {
    if (!this.state.id) {
      return (<div>
        <p>Loading...</p>
      </div>);
    } else {
      if (this.state.id && this.state.button === false) {
        return (<div className={styles.infoBody}>
          <Info test={this.state.test} />
          
          <KnownFor data={this.state.test} />
          <div className={styles.buttonBox} hidden={this.state.hideButton}>
            <div className={styles.knownButton} button type="button" onClick={this.toggleButton}>SHOW ALL ({this.state.test.mentions.length})</div>
          </div>
        </div>);
      } else if (this.state.button === true) {
        return (<div className="infoBody">
          <Info test={this.state.test} />
          
          <KnownFor data={this.state.test} />
          <div className={styles.buttonBox} hidden={this.state.hideButton}>
            <div className={styles.knownButton} button type="button" onClick={this.toggleButton}>SHOW LESS</div>
          </div>
        </div>);
      } 
    }
  }

}
export default App;
