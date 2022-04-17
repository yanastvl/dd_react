import React from "react";
import Header from "../../components/header/header";
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return(
        <>
            <Header/>
                <section className="main__error404">
                    <p className="text__error404">404</p>
                    <p className="text__error404">Страница не найдена</p>
                    <Link to={AppRoute.MAIN} button name="control" className="btn-back-to-main">На главную</Link>
                </section>
        </>
    )
}

export default Error404;