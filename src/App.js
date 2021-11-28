import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import './styles/Style.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
