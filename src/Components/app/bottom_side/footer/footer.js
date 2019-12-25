/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Вакансии</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Отзывы</a></li>
                </ul>
                <p>Наши контакты: <b>тел.</b> 8 (902) 123 45-67, <b>email:</b> info@site.ru</p>
                <p>Copyright &copy; Название компании, 2019 | <a href="#">Политика конфиденциальности</a></p>
            </nav>
        </footer>
    );
}

export default Footer;