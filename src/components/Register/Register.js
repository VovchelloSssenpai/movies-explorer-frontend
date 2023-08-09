import { useState } from 'react';
import Form from '../Form/Form';
import headerLogo from '../../images/logo.svg'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInvalid = (event) => {
        const input = event.target;
        const errorMessage = input.validationMessage;
      
        switch (input.name) {
          case 'username':
            setNameError(errorMessage);
            break;
          case 'email':
            setEmailError(errorMessage);
            break;
          case 'password':
            setPasswordError(errorMessage);
            break;
          default:
            break;
        }
      };

const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`hehe`);
}

    return (
    <main className="register">
      <div className='register__wrap'>
        <a href='/'><img src={headerLogo} alt='лого'></img></a>
      <h2 className="register__header">Добро пожаловать!</h2>
        <Form handleInvalid={handleInvalid} handleSubmit={handleSubmit} button={'Зарегистрироваться'} >
          <div className="form__wrap">
                <label className="form__field">Имя
                <input className={`form__input ${nameError ? 'form__input-error' : ''}`} 
                        required
                        placeholder='Введите текст' 
                        name='username'
                        minLength={2} 
                        maxLength={30} 
                        onInput={handleInvalid}
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>
                <span className="form__input-error">{nameError}</span>
                </label>
            </div>
            <div className="form__wrap">
                <label className="form__field">E-mail
                <input className={`form__input ${emailError ? 'form__input-error' : ''}`}
                        type="email" 
                        required
                        placeholder='Введите имейл'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onInput={handleInvalid}
                        ></input>
                <span className="form__input-error">{emailError}</span>
                </label>
            </div>
            <div className="form__wrap">
                <label className="form__field">Пароль
                <input className={`form__input ${passwordError ? 'form__input-error' : ''}`} 
                        type="password" 
                        placeholder='Введите пароль'
                        required
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onInput={handleInvalid}
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