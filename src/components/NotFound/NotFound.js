import {   useNavigate,  } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
    <main className="notFound">
        <h1 className="notFound__header">404</h1>
        <p className="notFound__text">Страница не найдена</p>
        <button className="notFound__link anchor-hover"  onClick={goBack}>Назад</button>
    </main>
    );
  }
  export default NotFound;