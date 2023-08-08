import { useState } from 'react';
import Form from '../Form/Form';
import headerLogo from '../../images/logo.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInvalid = (event) => {
        const input = event.target;
        const errorMessage = input.validationMessage;
      
        switch (input.name) {
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
    <main className="login">
      <div className='login__wrap'>
        <a href='/'><img src={headerLogo} alt='лого'></img></a>
        <h2 className="register__header">Рады видеть!</h2>
        <Form handleInvalid={handleInvalid} handleSubmit={handleSubmit} button={'Войти'} >
            <div className="form__wrap">
                <label className="form__field">E-mail
                <input className={`form__input ${emailError ? 'form__input-error' : ''}`}
                        type="email" 
                        required
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
  
  export default Login;