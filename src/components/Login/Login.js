import { useEffect } from "react";
import Form from "../Form/Form";
import headerLogo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/useValidate";

function Login({
  authorizationFormValue,
  setAuthorizationFormValue,
  handleAuthorization,
  authorizationError,
  isFormDisabled,
  setIsFormDisabled
}) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();
  useEffect(() => {
    setAuthorizationFormValue({
      email: values.email,
      password: values.password
    });
  }, [values, setAuthorizationFormValue]);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthorization(authorizationFormValue);
    setIsFormDisabled(true);
  };

  return (
    <main className="login">
      <div className="login__wrap">
        <a href="/">
          <img src={headerLogo} alt="лого"></img>
        </a>
        <h2 className="register__header">Рады видеть!</h2>
        <Form
          // handleInvalid={handleInvalid}
          handleSubmit={handleSubmit}
          button={"Войти"}
          isValid={isValid}
          authorizationError={authorizationError}
          isFormDisabled={isFormDisabled}
        >
          <div className="form__wrap">
            <label className="form__field">
              E-mail
              <input
                className={`form__input ${
                  errors.email ? "form__input-error" : ""
                }`}
                type="email"
                required
                name="email"
                placeholder="Введите имейл"
                value={values.email || ""}
                onChange={handleChange}
                disabled={isFormDisabled}
                pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
              ></input>
              <span className="form__input-error">{errors.email}</span>
            </label>
          </div>
          <div className="form__wrap">
            <label className="form__field">
              Пароль
              <input
                className={`form__input ${
                  errors.password ? "form__input-error" : ""
                }`}
                type="password"
                required
                name="password"
                placeholder="Введите пароль"
                value={values.password || ""}
                minLength={2}
                onChange={handleChange}
                disabled={isFormDisabled}
              ></input>
              <span className="form__input-error">{errors.password}</span>
            </label>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Login;
