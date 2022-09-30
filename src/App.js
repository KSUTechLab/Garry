import { Routes, Route } from 'react-router-dom';
import { Home, Login, Test, Callback } from './pages';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/Test' element = {<Test/>}/>
          <Route path = '/callback' element = {<Callback/>}/>
        </Routes>
    </div>
  );
}

export default App;
