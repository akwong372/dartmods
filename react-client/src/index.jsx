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
    this.sortByDate = this.sortByDate.bind(this);
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
  };

  createEntry(e) {
    const createdEntry = {
      author: 'guest',
      title: JSON.stringify(e.target[0].value),
      description: JSON.stringify(e.target[1].value),
      parts: JSON.stringify(e.target[2].value),
      tags: JSON.stringify(e.target[3].value).replace(/["]+/g, '').split(' '),
      main: JSON.stringify(e.target[4].value)
    };

    axios.post('/items', createdEntry)
      .then((response) => {
        console.log(response);
        this.getAll();
      });
  };

  sortByDate() {
    const sortedItems = this.state.items.sort((a, b) => new Date(b.date) - new Date(a.date))
    console.log(sortedItems)
    this.setState({
      items: sortedItems
    });
  };

  componentDidMount() {
    this.getAll();
  };

  render() {
    let userSubs = [];
    let userSubsRows = [];
    // let tempRow = [];

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

    // for (var i = 0; i < userSubs.length; i++) {
    //   tempRow.push(userSubs[i]);
    //   if (tempRow.length === 4) {
    //     userSubsRows.push(<div key={'rowId' + userSubs[i].props.postNumber} className='row'>{tempRow}</div>);
    //     tempRow = [];
    //   } else if (i === (userSubs.length - 1)) {
    //     userSubsRows.push(<div key={'rowId' + userSubs[i].props.postNumber} className='row'>{tempRow}</div>);
    //     tempRow = [];
    //   }
    // }

    return (<div>
      <Navbar sortByDate={this.sortByDate} />
      <h1>Page Title</h1>
      <CreateEntry createEntry={this.createEntry} />
      <div className="row">
        {userSubs}
      </div>
      <Footer />
    </div>);
  };
};

ReactDOM.render(<App />, document.getElementById('app'));