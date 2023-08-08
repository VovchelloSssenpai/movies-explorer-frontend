function Account() {


    return (
    <main className="account">
      <h2 className="account__header">Привет Виталий!</h2>
      <form className="accountForm">
        <div className="accountForm__wrapper">
            <label htmlFor="username" className="accountForm__label">Имя</label>
            <input placeholder="Виталий" type="text" id="username" name="username" className="accountForm__input" />
        </div>
        <div className="accountForm__wrapper">
            <label htmlFor="email" className="accountForm__label">E-mail</label>
            <input placeholder="pochta@yandex.ru"  id="email" name="email" className="accountForm__input"></input>
        </div>
        <div className="accountForm__buttonWrapper">
            <button className="accountForm__button button-hover">Редактировать</button>
            <button className="accountForm__button accountForm__button-colored button-hover">Выйти из аккаунта</button>
        </div>
      </form>
    </main>
    );
  }
  
  export default Account;