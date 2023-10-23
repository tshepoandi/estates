import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route element={PrivateRoute}>
            <Route path='/profile' element={<Profile/>}/> 
          </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
