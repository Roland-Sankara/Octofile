import { ContextProvider } from './context/AppContext';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import Repos from './components/Repos/Repos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/repositories" element={<Repos/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>  
    </div>
  );
}

export default App;
