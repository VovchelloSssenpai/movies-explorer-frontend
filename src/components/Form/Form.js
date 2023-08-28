import { useLocation, Link } from "react-router-dom";

function Form({ children, handleSubmit, button, isValid, authorizationError, isFormDisabled }) {
  const location = useLocation();

  return (
    <form className="form" noValidate onSubmit={handleSubmit} action="submit">
      {children}
      <p className="form__submitError">{authorizationError}</p>
      <button
        className={`form__button button-hover ${
          location.pathname === "/signin" ? "form__button-edited" : null
        } ${!isValid ? "form__button-disabled" : null}`}
        type="submit"
        disabled={isFormDisabled}
      >
        {button}
      </button>
      <p className="form__text">
        {location.pathname === "/signup"
          ? "Уже зарегистрированы?"
          : "Ещё не зарегистрированы?"}{" "}
        <Link
          className="form__link anchor-hover"
          to={location.pathname === "/signup" ? "/signin" : "/signup"}
        >
          {location.pathname === "/signup" ? "Войти" : "Регистрация"}
        </Link>
      </p>
    </form>
  );
}

export default Form;
