import { useEffect } from "react";
import Form from "../Form/Form";
import headerLogo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/useValidate";

function Register({
  onRegister,
  authorizationError,
  setRegisterFormValue,
  registerFormValue,
  isFormDisabled,
  setIsFormDisabled
}) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    setRegisterFormValue({
      name: values.name,
      email: values.email,
      password: values.password
    });
  }, [values, setRegisterFormValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(registerFormValue);
    setIsFormDisabled(true);
  };


  return (
    <main className="register">
      <div className="register__wrap">
        <a href="/">
          <img src={headerLogo} alt="лого"></img>
        </a>
        <h2 className="register__header">Добро пожаловать!</h2>
        <Form
          handleSubmit={handleSubmit}
          button={"Зарегистрироваться"}
          isValid={isValid}
          authorizationError={authorizationError}
          isFormDisabled={isFormDisabled}
        >
          <div className="form__wrap">
            <label className="form__field">
              Имя
              <input
                className={`form__input ${
                  errors.name ? "form__input-error" : ""
                }`}
                required
                placeholder="Введите текст"
                name="name"
                minLength={2}
                maxLength={30}
                pattern="^(?!\s)[A-Za-zА-Яа-я\-\s]+$"
                onChange={handleChange}
                disabled={isFormDisabled}
                value={values.name || ""}
              ></input>
              <span className="form__input-error">{errors.name}</span>
            </label>
          </div>
          <div className="form__wrap">
            <label className="form__field">
              E-mail
              <input
                className={`form__input ${
                  errors.email ? "form__input-error" : ""
                }`}
                type="email"
                required
                placeholder="Введите имейл"
                name="email"
                onChange={handleChange}
                disabled={isFormDisabled}
                pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
                value={values.email || ""}
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
                placeholder="Введите пароль"
                required
                minLength={2}
                name="password"
                value={values.password || ""}
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

export default Register;
