import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext, useState } from 'react';

function Account({ handleLogOut, handleUserUpdate }) {
  const currentUser = useContext(CurrentUserContext);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserInfo = {
      name: newName || currentUser.name,
      email: newEmail || currentUser.email,
    };
    handleUserUpdate(updatedUserInfo);
  };

    return (
    <main className="account">
      <h2 className="account__header">{`Привет ${currentUser.name}!`}</h2>
      <form className="accountForm" onSubmit={handleSubmit}>
        <div className="accountForm__wrapper">
            <label htmlFor="username" className="accountForm__label">Имя</label>
            <input placeholder={`${currentUser.name}`} 
                  type="text" 
                  name="username" 
                  className="accountForm__input"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div className="accountForm__wrapper">
            <label htmlFor="email" className="accountForm__label">E-mail</label>
            <input placeholder={`${currentUser.email}`} 
                   name="email" 
                   className="accountForm__input"
                   type="email"
                   value={newEmail}
                   onChange={(e) => setNewEmail(e.target.value)}></input>
        </div>
        <div className="accountForm__buttonWrapper">
            <button className="accountForm__button button-hover" type="submit" >Редактировать</button>
            <button className="accountForm__button accountForm__button-colored button-hover" onClick={handleLogOut} >Выйти из аккаунта</button>
        </div>
      </form>
    </main>
    );
  }
  
  export default Account;