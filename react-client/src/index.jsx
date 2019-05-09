import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import UserSubmission from './components/UserSubmission.jsx';
import CreateEntry from './components/CreateEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }



  componentDidMount() {
    axios.get('/items')
      .then((response) => {
        this.setState({
          items: response.data
        })
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    let userSubs = [];

    userSubs = this.state.items.map((item, i) => {
      return <UserSubmission
        key={'submissionId' + i}
        author={item.author}
        title={item.title}
        description={item.description}
        parts={item.parts}
        tags={item.tags}
        main={item.main} />
    });

    return (<div>
      <Navbar />
      <h1>Page Title</h1>
      <CreateEntry />
      {userSubs}
      <Footer />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));