import { useState } from "react";
import Form from "../Form/Form";
import headerLogo from "../../images/logo.svg";
import { EMAIL_REGEX, VALID_CHARACTERS } from "../../utils/constandData"

function Register({
  onRegister,
  authorizationError,
  setRegisterFormValue,
  registerFormValue,
  isFormDisabled,
  setIsFormDisabled
}) {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInvalid = (event) => {
    const input = event.target;
    let errorMessage = input.validationMessage;
    setIsValid(input.closest("form").checkValidity());

    switch (input.name) {
      case "name":
        const nameValue = input.value.trim();

        if (!VALID_CHARACTERS.test(nameValue)) {
          errorMessage = "Wrong format.";
        }
        setNameError(errorMessage);
        break;
      case "email":
        setEmailError(errorMessage);
        setIsEmailValid(input.value.match(EMAIL_REGEX));
        break;
      case "password":
        setPasswordError(errorMessage);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(registerFormValue);
    setIsFormDisabled(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormValue({ ...registerFormValue, [name]: value });
  };

  return (
    <main className="register">
      <div className="register__wrap">
        <a href="/">
          <img src={headerLogo} alt="лого"></img>
        </a>
        <h2 className="register__header">Добро пожаловать!</h2>
        <Form
          handleInvalid={handleInvalid}
          handleSubmit={handleSubmit}
          button={"Зарегистрироваться"}
          isValid={isValid && isEmailValid}
          authorizationError={authorizationError}
          isFormDisabled={isFormDisabled}
        >
          <div className="form__wrap">
            <label className="form__field">
              Имя
              <input
                className={`form__input ${
                  nameError ? "form__input-error" : ""
                }`}
                required
                placeholder="Введите текст"
                name="name"
                minLength={2}
                maxLength={30}
                onInput={handleInvalid}
                value={registerFormValue.name || ""}
                onChange={handleChange}
                disabled={isFormDisabled}
              ></input>
              <span className="form__input-error">{nameError}</span>
            </label>
          </div>
          <div className="form__wrap">
            <label className="form__field">
              E-mail
              <input
                className={`form__input ${
                  emailError ? "form__input-error" : ""
                }`}
                type="email"
                required
                placeholder="Введите имейл"
                name="email"
                value={registerFormValue.email || ""}
                onChange={handleChange}
                onInput={handleInvalid}
                disabled={isFormDisabled}
              ></input>
              <span className="form__input-error">{emailError}</span>
            </label>
          </div>
          <div className="form__wrap">
            <label className="form__field">
              Пароль
              <input
                className={`form__input ${
                  passwordError ? "form__input-error" : ""
                }`}
                type="password"
                placeholder="Введите пароль"
                required
                name="password"
                value={registerFormValue.password || ""}
                onChange={handleChange}
                onInput={handleInvalid}
                disabled={isFormDisabled}
              ></input>
              <span className="form__input-error">{passwordError}</span>
            </label>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Register;
