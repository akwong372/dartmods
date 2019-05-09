import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar from './components/Navbar.jsx';
import UserSubmission from './components/UserSubmission.jsx';

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
    let userSubs = [];

    userSubs = this.state.items.map((item)=>{
      return <UserSubmission
        author={item.author}
        title={item.title}
        description={item.description}
        parts={item.parts}
        tags={item.tags}
        main={item.main}/>
    });

    return (<div>
      <Navbar/>
      {userSubs}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));