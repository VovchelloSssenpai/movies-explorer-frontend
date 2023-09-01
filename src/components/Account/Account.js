import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext, useState } from "react";
import { VALID_CHARACTERS, EMAIL_REGEX } from "../../utils/constandData";

function Account({
  handleLogOut,
  handleUserUpdate,
  setProfileRequestStatus,
  profileRequestStatus,
  isFormDisabled,
  setIsFormDisabled
}) {
  const currentUser = useContext(CurrentUserContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditingButtonStatus = () => {
    setIsEditing(true);
    setNewName(currentUser.name);
    setNewEmail(currentUser.email);
  };

  const handleInvalid = (event) => {
    const input = event.target;
    let errorMessage = input.validationMessage;
    setIsValid(input.closest("form").checkValidity());

    switch (input.name) {
      case "username":
        const nameValue = input.value.trim();

        if (!VALID_CHARACTERS.test(nameValue)) {
          errorMessage = "Wrong format.";
        }
        setNameError(errorMessage);
        break;
      case "email":
        setEmailError(errorMessage);
        const isEmailValid = EMAIL_REGEX.test(input.value);
        setIsEmailValid(isEmailValid);
        break;
      default:
        break;
    }
  };

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleButtonCheck = () => {
    if(currentUser.email === newEmail || currentUser.name === newName) {return false}
    else { return true}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.email === newEmail) {
      setProfileRequestStatus("Пользователь с таким email уже существует");
    } else {
      const updatedUserInfo = {
        name: newName || currentUser.name,
        email: newEmail || currentUser.email,
      };
      handleUserUpdate(updatedUserInfo);
      setIsFormDisabled(true);
    }
  };

  return (
    <main className="account">
      <h2 className="account__header">{`Привет ${currentUser.name}!`}</h2>
      <form
        className="accountForm"
        onSubmit={handleSubmit}
        noValidate
        action="submit"
      >
        <div className="accountForm__wrapper">
          <label htmlFor="username" className="accountForm__label">
            Имя
          </label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              minLength={2}
              maxLength={30}
              required
              className={`accountForm__input ${
                nameError ? "accountForm__input-error" : ""
              }`}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onInput={handleInvalid}
              disabled={isFormDisabled}
            />
          ) : (
            <p className="accountForm__text">{currentUser.name}</p>
          )}
        </div>
        <span className="accountForm__input-error">{nameError}</span>
        <div className="accountForm__wrapper">
          <label htmlFor="email" className="accountForm__label">
            E-mail
          </label>
          {isEditing ? (
            <input
              name="email"
              className={`accountForm__input ${
                emailError ? "accountForm__input-error" : ""
              }`}
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              onInput={handleInvalid}
              required
              disabled={isFormDisabled}
            ></input>
          ) : (
            <p className="accountForm__text">{currentUser.email}</p>
          )}
        </div>
        <span className="accountForm__input-error">{emailError}</span>
        {!isEditing ? (
          <div className="accountForm__buttonWrapper">
            <button
              type="button"
              className={`accountForm__button button-hover`}
              onClick={handleEditingButtonStatus}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="accountForm__button accountForm__button-colored button-hover"
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        ) : (
          <div className="accountForm__buttonWrapper">
            <p className={`${profileRequestStatus.includes('обновлены') ? 'accountForm__requestStatus-positive': 'accountForm__requestStatus'}`}>{profileRequestStatus}</p>
            <button
              className={`form__button button-hover ${
                !isValid || !isEmailValid || !handleButtonCheck() ? "form__button-disabled" : ""
              }`}
              type="submit"
              disabled={isFormDisabled}
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
    </main>
  );
}

export default Account;
