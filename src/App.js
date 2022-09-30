import { Routes, Route } from 'react-router-dom';
import { Home, Login, Test } from './pages';
import Callback from './auth/naver/callback';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/Test' element = {<Test/>}/>
          <Route path = '/auth/naver/callback' element = {<Callback/>}/>
        </Routes>
    </div>
  );
}

export default App;
