import './App.css';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Tweets from './components/Tweets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <LeftSideBar className='App__leftSideBar' />
      <Router>
        <Switch>
          <Route path='/' component={Tweets} />
        </Switch>
      </Router>
      <RightSideBar className='App__rightSideBar' />
    </div>
  );
}

export default App;
