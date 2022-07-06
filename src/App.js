import './css/Null.css';
import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Content/Sidebar/Sidebar';
import Main from './components/Content/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
