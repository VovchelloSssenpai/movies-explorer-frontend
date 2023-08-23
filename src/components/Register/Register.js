import { useState } from 'react';
import Form from '../Form/Form';
import headerLogo from '../../images/logo.svg'

function Register( { onRegister, authorizationError} ) {
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const [registerFormValue, setRegisterFormValue] = useState({
      name: '',
      password: '',
      email: ''
          })


    const handleInvalid = (event) => {
        const input = event.target;
        let errorMessage = input.validationMessage;
        setIsValid(input.closest('form').checkValidity());

        switch (input.name) {
          case 'name':
            const nameValue = input.value.trim();
            const validCharacters = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
            
            if (!validCharacters.test(nameValue)) {
                errorMessage = "Wrong format.";
            }
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
        onRegister(registerFormValue);
}

const handleChange = (e) => {  
  const {name, value} = e.target;
  setRegisterFormValue({...registerFormValue, [name]: value})
}

    return (
    <main className="register">
      <div className='register__wrap'>
        <a href='/'><img src={headerLogo} alt='лого'></img></a>
      <h2 className="register__header">Добро пожаловать!</h2>
        <Form handleInvalid={handleInvalid} 
              handleSubmit={handleSubmit} 
              button={'Зарегистрироваться'}
              isValid={isValid}
              authorizationError={authorizationError} >
          <div className="form__wrap">
                <label className="form__field">Имя
                <input className={`form__input ${nameError ? 'form__input-error' : ''}`} 
                        required
                        placeholder='Введите текст' 
                        name='name'
                        minLength={2} 
                        maxLength={30} 
                        onInput={handleInvalid}
                        value={registerFormValue.name || ''}
                        onChange={handleChange}></input>
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
                        value={registerFormValue.email || ''}
                        onChange={handleChange}
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
                        value={registerFormValue.password || ''}
                        onChange={handleChange}
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