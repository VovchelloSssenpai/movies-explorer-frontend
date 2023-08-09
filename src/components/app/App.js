import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Account from '../Account/Account';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import {Routes, Route, useLocation} from 'react-router-dom'
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();
function handleFooter() {
  if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/") {return <Footer />}
  else {return null}
}
function handleHeader(){
  if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/" || location.pathname === "/profile") {return <Header />}
  else {return null}
}


  return (
    <div className="App">
      {handleHeader()}
      <Routes>
          <Route to path='/' element={<Main />}>
          </Route>
          <Route to path='/movies' element={<Movies />}>
          </Route>
          <Route to path='/saved-movies' element={<SavedMovies />}>
          </Route>
          <Route to path='/profile' element={<Account />}>
          </Route>
          <Route to path='/signup' element={<Register />}>
          </Route>
          <Route to path='/signin' element={<Login />}>
          </Route>
          <Route to path='*' element={<NotFound />}>
          </Route>
      </Routes> 
      {handleFooter()}
    </div>
  );
}

export default App;
