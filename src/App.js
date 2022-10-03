import { Routes, Route } from 'react-router-dom';
import { Home, Login, Test } from './pages';
import NaverLogin from './auth/naver/NaverLogin';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/Test' element = {<Test/>}/>
          <Route path = '/auth/naver/NaverLogin' element = {<NaverLogin/>}/>
        </Routes>
    </div>
  );
}

export default App;
