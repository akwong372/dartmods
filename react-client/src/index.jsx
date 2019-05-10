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
    this.createEntry = this.createEntry.bind(this);
  }

  createEntry (e) {
    e.preventDefault();
    console.log(e)
    const createdEntry = {
      author: 'guest',
      title: JSON.stringify(e.target[0].value),
      description: JSON.stringify(e.target[1].value),
      parts: JSON.stringify(e.target[2].value),
      tags: JSON.stringify(e.target[3].value).replace(/["]+/g, '').split(' '),
      main: JSON.stringify(e.target[4].value)
    }
    console.log(createdEntry)
    // axios.post('/items', createdEntry)
    // .then(()=>{

    // })
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
      <CreateEntry createEntry={this.createEntry} />
      {userSubs}
      <Footer />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));