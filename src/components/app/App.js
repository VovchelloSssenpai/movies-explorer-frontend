import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Account from "../Account/Account";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { gettingMoviesApi } from "../../utils/MoviesApi";
import { profileApi } from "../../utils/MainApi";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { registrationEmailError, registrationError } from "../../utils/constandData";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allMovies, setAllMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState(true);
  const [authorizationError, setAuthorizationError] = useState("");
  const [authorizationFormValue, setAuthorizationFormValue] = useState({
    email: "",
    password: "",
  });
  const [registerFormValue, setRegisterFormValue] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });
  const [likedMovies, setLikedMovies] = useState([]);
  const [userID, setUserID] = useState("");
  const [profileRequestStatus, setProfileRequestStatus] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // TOKEN CHECK
  const handleTokenCheck = () => {
    const path = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      profileApi.authorizationCheck(token).then((res) => {
        setUserID(res._id);
        const { name, email } = res;
        setProfileData({ name, email });
        setLoggedIn(true);
        if (path !== "signin") {
          navigate(path, { replace: true });
        }
      });
    }
  };

  useEffect(() => {
    handleTokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // UPDATING USER INFO
  function handleUserUpdate(userInfo) {
    profileApi.updateUserInfo(userInfo).then((res) => {
      setProfileRequestStatus('Данные обновлены');
      const { name, email } = res;
      setProfileData({ name, email });
      setIsFormDisabled(false);
    }).catch((err) => {setProfileRequestStatus("При регистрации пользователя произошла ошибка."); setIsFormDisabled(false);});
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    setProfileData({
      name: "",
      email: "",
    });
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("shortFilmStatus");
    localStorage.removeItem("searchTerm");
    setLoggedIn(false);
  }

  // FINDING MOVIES
  function handleMoviesDataRequest() {
    setIsLoading(true);
    gettingMoviesApi
      .getMovies()
      .then((res) => {
        setAllMovies(res);
        setIsResponseOk(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsResponseOk(false);
      });
  }

  useEffect(() => {
    handleMoviesDataRequest();
  }, []);

  // REGISTRATION
  function handleRegistration(data) {
    return profileApi
      .register(data)
      .then((res) => {
        handleAuthorization({
          email: registerFormValue.email,
          password: registerFormValue.password,
        });
        setIsFormDisabled(false);
      })
      .catch((err) => {
        setIsFormDisabled(false);
        if (err.includes("409")) {
          setAuthorizationError(registrationEmailError);
        } else {
          setAuthorizationError(
            registrationError
          );
        }
      });
  }

  // AUTHORIZATION
  function handleAuthorization(data) {
    return profileApi
      .authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setAuthorizationFormValue({
            email: "",
            password: "",
          });
        }
        setIsFormDisabled(false);
        setProfileData({name: res.data.name, email: res.data.email});
        setUserID(res.data._id);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
        return res;
      })
      .catch((err) => {
        setIsFormDisabled(false);
        setAuthorizationError(err);
      });
  }

  function gettingLikedMovies() {
    if (loggedIn) {
      profileApi
        .getLikedMovies()
        .then((res) => {
          const ownedLiked = res.filter((movie) => movie.owner === userID);
          setLikedMovies(ownedLiked);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // GET LIKED MOVIES
  useEffect(() => {
    gettingLikedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // HandleLike
  function handleLike(cardData) {
    profileApi
      .placeLike(cardData)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle Remove like
  function handleDislike(movieId) {
    profileApi
      .removeLike(movieId)
      .then((res) => {
        gettingLikedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={profileData}>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                isLoading={isLoading}
                isResponseOk={isResponseOk}
                handleLike={handleLike}
                handleDislike={handleDislike}
                likedMovies={likedMovies}
                allMovies={allMovies}
                setIsLoading={setIsLoading}
                handleMoviesDataRequest={handleMoviesDataRequest}
              ></ProtectedRouteElement>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
                likedMovies={likedMovies}
                handleDislike={handleDislike}
                gettingLikedMovies={gettingLikedMovies}
              ></ProtectedRouteElement>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                handleLogOut={handleLogOut}
                handleUserUpdate={handleUserUpdate}
                element={Account}
                setProfileRequestStatus={setProfileRequestStatus}
                profileRequestStatus={profileRequestStatus}
                isFormDisabled={isFormDisabled}
                setIsFormDisabled={setIsFormDisabled}
              ></ProtectedRouteElement>
            }
          ></Route>
          <Route
            path="/signup"
            element={loggedIn ? <Navigate to="/" replace /> :
              <Register
                onRegister={handleRegistration}
                authorizationError={authorizationError}
                registerFormValue={registerFormValue}
                setRegisterFormValue={setRegisterFormValue}
                isFormDisabled={isFormDisabled}
                setIsFormDisabled={setIsFormDisabled}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={loggedIn ? <Navigate to="/" replace /> :
              <Login
                authorizationFormValue={authorizationFormValue}
                setAuthorizationFormValue={setAuthorizationFormValue}
                handleAuthorization={handleAuthorization}
                authorizationError={authorizationError}
                isFormDisabled={isFormDisabled}
                setIsFormDisabled={setIsFormDisabled}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
