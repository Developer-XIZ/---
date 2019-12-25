/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './content_right.css';

const ContentRight = () => {
    return (
        <div className="content_right">
            <div className="top">
                <h2>Добро пожаловать на наш сайт</h2>
                <p>Для того чтобы отвечать требовательным ожиданиям наших пациентов, мы стремимся оснащать
                    клинику только самым современным и проверенным оборудованием. В нашей клинике широко
                    применяются цифровые технологии, позволяющие усовершенствовать процесс лечения.</p>
                <a href="#">Читать далее</a>
            </div>

            <div className="bottom">
                <h2>Главные новости компании</h2>
                <div className="news">
                    <img src={require("./news.jpg")} alt="News" />
                    <div className="description">
                        <h3>Заголовок новости</h3>
                        <p>Задача организации, в особенности же консультация с широким активом способствует
                            подготовки и реализации новых предложений.</p>
                    </div>
                </div>
                <div className="news_links">
                    <a href="#">Ссылка на другую страницу с новостью</a>
                    <a href="#">Ссылка на другую страницу с новостью</a>
                    <a href="#">Ссылка на другую страницу с новостью</a>
                </div>
                <a href="#">Читать далее</a>
            </div>
        </div>
    );
}

export default ContentRight;