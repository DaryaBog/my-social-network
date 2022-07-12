import React from 'react'
import './css/Null.css';
import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Content/Sidebar/Sidebar';
import Main from './components/Content/Main/Main';
import Feed from './components/Content/Feed/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Content/Dialogs/dialogs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <Sidebar />
          <div className='content__main'>
            <Routes>
              <Route path='/main' element={<Main />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/dialogs' element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
