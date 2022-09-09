import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import New from './pages/New'
import Diary from './pages/Diary'
import MyButton from './components/MyButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>앱</h2>
        <MyButton/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/edit' element={<Edit />}/>
          <Route path='/diary/:id' element={<Diary />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
