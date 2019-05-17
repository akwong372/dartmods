import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import UserSubmission from './components/UserSubmission.jsx';
import CreateEntry from './components/CreateEntry.jsx';
import AlertBar from './components/AlertBar.jsx';
import LoginPage from './components/LoginPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: [],
      alertMessage: '',
      alertStatus: '',
      sort: '',
      pageView: 'mainView',
      currentUser: '',
      loginMode: 0
    }
    this.createEntry = this.createEntry.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByLikes = this.sortByLikes.bind(this);
    this.sortByTags = this.sortByTags.bind(this);
    this.alertDismiss = this.alertDismiss.bind(this);
    this.addLike = this.addLike.bind(this);
    this.loginCancel = this.loginCancel.bind(this);
    this.loginEnter = this.loginEnter.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.loginCreate = this.loginCreate.bind(this);
    this.loginToggle = this.loginToggle.bind(this);
    this.logoutSubmit = this.logoutSubmit.bind(this);
  }

  getAll() {
    axios.get('/items')
      .then((response) => {
        this.setState({
          items: response.data.data,
          currentUser: response.data.currentUser
        })
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  createEntry(e) {
    const createdEntry = {
      author: this.state.currentUser,
      title: JSON.stringify(e.target[0].value),
      description: JSON.stringify(e.target[1].value),
      parts: JSON.stringify(e.target[2].value),
      tags: JSON.stringify(e.target[3].value).replace(/["]+/g, '').split(' '),
      main: JSON.stringify(e.target[4].value)
    };

    axios.post('/items', createdEntry)
      .then((response) => {
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

  sortByTags(e) {
    e.preventDefault();
    const searchedTag = e.target[0].value;

    if (searchedTag.length > 0) {
      const filteredItems = this.state.items.filter((item) => item.tags.indexOf(searchedTag) > -1);
      if (filteredItems.length < 1) {
        this.setState({
          alertMessage: `No results found for "${searchedTag}".`,
          alertStatus: 'warning'
        });
      }
      this.setState({
        filteredItems: filteredItems,
        sort: 'tags'
      });
    } else {
      this.setState({
        sort: ''
      });
    }
    e.target[0].value = '';
  };

  alertDismiss() {
    this.setState({
      alertMessage: '',
      alertStatus: ''
    })
  }

  addLike(postId) {
    axios.post(`/items/${postId}/like`, {})
      .then((response) => {
        this.getAll();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loginEnter() {
    this.setState({
      pageView: 'loginView'
    });
  };

  loginSubmit(e) {
    const loginInfo = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    e.target[0].value = '';
    e.target[1].value = '';

    axios.post('/users/login', loginInfo)
      .then((response) => {
        this.setState({
          currentUser: response.data.username
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  logoutSubmit() {
    axios.get('users/logout')
      .then(() =>
        this.setState({
          currentUser: ''
        }));
  };

  loginCancel() {
    this.setState({
      pageView: 'mainView',
      loginMode: 0
    });
  };

  loginToggle() {
    let loginMode = this.state.loginMode === 1 ? 0 : 1;
    this.setState({
      loginMode: loginMode
    })
  }

  loginCreate(e) {
    if (e.target[1].value === e.target[2].value) {

      const loginInfo = {
        username: e.target[0].value,
        password: e.target[1].value
      }

      axios.post('/users/newuser', loginInfo)
        .then((response) => {
          console.log(response)
          this.setState({
            currentUser: response.data.username
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      e.preventDefault();
      this.setState({
        alertMessage: 'Entered passwords do not match.',
        alertStatus: 'warning'
      });
    }
  }

  componentDidMount() {
    this.getAll();
  };

  render() {
    let userSubs = [];
    let alertBar = '';

    if (this.state.alertMessage !== '') {
      alertBar = <AlertBar
        status={this.state.alertStatus}
        message={this.state.alertMessage}
        alertDismiss={this.alertDismiss}
      />;
    }

    if (this.state.sort === 'tags') {
      userSubs = this.state.filteredItems.map((item, i) => {
        return <UserSubmission
          key={'submissionIdFiltered' + i}
          postId={item._id}
          postNumber={i}
          author={item.author}
          likes={item.likes}
          date={item.date}
          title={item.title}
          description={item.description}
          parts={item.parts}
          tags={item.tags}
          main={item.main}
          addLike={this.addLike}
        />
      });
    } else {
      userSubs = this.state.items.map((item, i) => {
        return <UserSubmission
          key={'submissionId' + i}
          postId={item._id}
          postNumber={i}
          author={item.author}
          likes={item.likes}
          date={item.date}
          title={item.title}
          description={item.description}
          parts={item.parts}
          tags={item.tags}
          main={item.main}
          addLike={this.addLike}
          currentUser={this.state.currentUser}
        />
      });
    }

    const mainView = (
      <div>
        <Navbar
          sortByDate={this.sortByDate}
          sortByLikes={this.sortByLikes}
          sortByTags={this.sortByTags}
          currentUser={this.state.currentUser}
          loginEnter={this.loginEnter}
          logoutSubmit={this.logoutSubmit}
          currentUser={this.state.currentUser}
        />
        {alertBar}
        <CreateEntry createEntry={this.createEntry} />
        <div className="row container-fluid">
          {userSubs}
        </div>
        <Footer />
      </div>);

    const loginView = (
      <div>
        {alertBar}
        <LoginPage
          loginCancel={this.loginCancel}
          loginSubmit={this.loginSubmit}
          loginToggle={this.loginToggle}
          loginMode={this.state.loginMode}
          loginCreate={this.loginCreate}
        />
        <Footer />
      </div>)

    return this.state.pageView === 'mainView' ? mainView : loginView;
  };
};

ReactDOM.render(<App />, document.getElementById('app'));