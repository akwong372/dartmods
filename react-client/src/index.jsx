import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <Navbar/>
      <h1>Page Title</h1>
      <List items={this.state.items}/>
      <Footer/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));