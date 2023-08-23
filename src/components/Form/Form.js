// import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Form( { children, handleSubmit, button, isValid, authorizationError }) {
    const location = useLocation();

    return (
        <form className="form" noValidate onSubmit={handleSubmit} action="submit">
            {children}
            <p className='form__submitError'>{authorizationError}</p>
            <button className={`form__button button-hover ${location.pathname === "/signin" ? "form__button-edited" : null} ${!isValid ? 'form__button-disabled' : null}`} type="submit" >{button}</button>
            <p className="form__text">{location.pathname === "/signup" ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'} <a className="form__link anchor-hover" href={location.pathname === "/signup" ? "/signin" : "signup"}>{location.pathname === "/signup" ? 'Войти' : 'Регистрация'}</a></p>
        </form>
    );
  }
  
  export default Form;