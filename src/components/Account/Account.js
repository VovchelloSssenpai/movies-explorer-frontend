import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext, useState } from "react";
import { useFormWithValidation } from "../../utils/useValidate";


function Account({
  handleLogOut,
  handleUserUpdate,
  setProfileRequestStatus,
  profileRequestStatus,
  isFormDisabled,
  setIsFormDisabled
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditingButtonStatus = () => {
    setIsEditing(!isEditing);
    values.name = currentUser.name;
    values.email = currentUser.email;
  };

  const handleButtonCheck = () => {
    if(currentUser.email === values.email  &&  currentUser.name === values.username ) {console.log(currentUser.name === values.name); console.log(values.name); return false}
    else {console.log(true); return true}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(values.name);
      const updatedUserInfo = {
        name: values.username || currentUser.name,
        email: values.email || currentUser.email,
      };
      handleUserUpdate(updatedUserInfo);
      setIsFormDisabled(true);
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
              className={`accountForm__input ${
                errors['username'] ? "accountForm__input-error" : ""
              }`}
              defaultValue={values.name}
              onChange={handleChange}
              disabled={isFormDisabled}
              required
            />
          ) : (
            <p className="accountForm__text">{currentUser.name}</p>
          )}
        </div>
        <span className="accountForm__input-error">{errors['username']}</span>
        <div className="accountForm__wrapper">
          <label htmlFor="email" className="accountForm__label">
            E-mail
          </label>
          {isEditing ? (
            <input
              name="email"
              className={`accountForm__input ${
                errors['email'] ? "accountForm__input-error" : ""
              }`}
              type="email"
              pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
              defaultValue={values.email}
              onChange={handleChange}
              disabled={isFormDisabled}
              required
            ></input>
          ) : (
            <p className="accountForm__text">{currentUser.email}</p>
          )}
        </div>
        <span className="accountForm__input-error">{errors['email']}</span>
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
                !isValid || !handleButtonCheck() ? "form__button-disabled" : ""
              }`}
              type="submit"
               disabled={!isValid  || isFormDisabled || !handleButtonCheck()}              
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
