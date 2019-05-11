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
      items: [],
      sort: ''
    }
    this.createEntry = this.createEntry.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByLikes = this.sortByLikes.bind(this);
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
    let sortedItems = [];
    if (this.state.sort === 'date') {
      sortedItems = this.state.items.sort((a, b) => new Date(a.date) - new Date(b.date))

      this.setState({
        items: sortedItems,
        sort: 'dateReverse'
      });
    } else {
      sortedItems = this.state.items.sort((a, b) => new Date(b.date) - new Date(a.date))

      this.setState({
        items: sortedItems,
        sort: 'date'
      });
    }
  };

  sortByLikes() {
    let sortedItems = [];
    if (this.state.sort === 'like') {
      sortedItems = this.state.items.sort((a, b) => a.likes - b.likes)

      this.setState({
        items: sortedItems,
        sort: 'likeReverse'
      });
    } else {
      sortedItems = this.state.items.sort((a, b) => b.likes - a.likes)

      this.setState({
        items: sortedItems,
        sort: 'like'
      });
    }
  }

  componentDidMount() {
    this.getAll();
  };

  render() {
    let userSubs = [];
    // let userSubsRows = [];
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
      <Navbar sortByDate={this.sortByDate} sortByLikes={this.sortByLikes} />
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