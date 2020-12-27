import './App.css';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  useEffect(() => {
    localStorage.setItem('userId', 'users/d482zaU11BMPpTsOg5TU');
  }, []);
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
