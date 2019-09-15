import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import Search from './components/users/Search';
// import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  // const [repos, setRepos] = useState([]);

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   let users = await axios.get(`https://api.github.com/users?client_id=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ loading: false, users: users.data });
  // }

  // const searchUsers = async text => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   let users = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(users);
  //   // this.setState({ loading: false, users: users.data.items });

  //   setUsers(users.data.items);
  //   setLoading(false);
  // };

  // const getUser = async username => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   let users = await axios.get(`https://api.github.com/users/${username}?client_id=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(users);
  //   // this.setState({ loading: false, user: users.data });

  //   setUser(users.data);
  //   setLoading(false);
  // };

  // const getUserRepos = async username => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   let repos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // this.setState({ loading: false, repos: repos.data });

  //   setRepos(repos.data);
  //   setLoading(false);
  // };

  // const clearUsers = () => {
  //   // this.setState({ users: [], loading: false });
  //   setUsers([]);
  //   setLoading(false);
  // };

  // const showAlert = (msg, type) => {
  //   // this.setState({ alert: { msg, type } });
  //   setAlert({ alert: { msg, type } });
  //   setTimeout(() => setAlert(null), 5000);
  // };
  return (
    <AlertState>
      <GithubState>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
