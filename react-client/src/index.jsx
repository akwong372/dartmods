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
import { typeParameterInstantiation } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.createEntry = this.createEntry.bind(this);
  }

  getAll() {
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

  createEntry(e) {
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
    axios.post('/items', createdEntry)
      .then((response) => {
        console.log(response);
        this.getAll();
      })
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    let userSubs = [];
    let userSubsRows = [];
    let tempRow = [];

    userSubs = this.state.items.map((item, i) => {
      return <UserSubmission
        key={'submissionId' + i}
        postNumber={i}
        author={item.author}
        likes={item.likes}
        date={item.date}
        title={item.title}
        description={item.description}
        parts={item.parts}
        tags={item.tags}
        main={item.main} />
    });

    for (var i = 0; i < userSubs.length; i++) {
      tempRow.push(userSubs[i]);
      if (tempRow.length === 4) {
        userSubsRows.push(<div key={'rowId'+userSubs[i].props.postNumber} className='row'>{tempRow}</div>);
        tempRow = [];
      } else if (i === (userSubs.length - 1)) {
        userSubsRows.push(<div key={'rowId'+userSubs[i].props.postNumber} className='row'>{tempRow}</div>);
        tempRow = [];
      }
    }

    return (<div>
      <Navbar />
      <h1>Page Title</h1>
      <CreateEntry createEntry={this.createEntry} />
      <div className="container-fluid">
          {userSubsRows}
      </div>
      <Footer />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));