/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="top">
                <div className="logo">
                    <img src={require("./logo.png")} alt="Логотип" />
                    <div>
                        <p>
                            <span>Стоматологическая</span>
                            <span>Клиника</span>
                        </p>
                        <p>
                            Дарим красивую улыбку
                        </p>
                    </div>
                </div>
                <form action="" method="POST">
                    <input type="text" placeholder="Поиск по сайту" />
                    <button>Поиск</button>
                </form>
            </div>

            <div className="banner">
                <div>
                    <p>Мы создаем</p>
                    <p>Красивые <span>улыбки</span></p>
                </div>
            </div>

            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Вакансии</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Отзывы</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;