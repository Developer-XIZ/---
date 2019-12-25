/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './content_left.css';

const ContentLeft = () => {
    return (
        <div className="content_left">
            <section>
                <h3>Дополнительные услуги</h3>
                <article>
                    <img src={require("./services.jpg")} alt="Service" />
                    <div>
                        <p><a href="#">Услуга #1</a></p>
                        <p>Здесь описание услуги по услуге #1</p>
                    </div>
                </article>
                <article>
                    <img src={require("./services.jpg")} alt="Service" />
                    <div>
                        <p><a href="#">Услуга #2</a></p>
                        <p>Здесь описание услуги по услуге #2</p>
                    </div>
                </article>
                <article>
                    <img src={require("./services.jpg")} alt="Service" />
                    <div>
                        <p><a href="#">Услуга #3</a></p>
                        <p>Здесь описание услуги по услуге #3</p>
                    </div>
                </article>
            </section>
            <div className="bottom">
                <div className="left">
                    <p><span>Акция</span> для</p>
                    <p>наших <span>клиентов</span></p>
                </div>
                <div className="right">
                    <p>-10%</p>
                </div>
            </div>
        </div>
    );
}

export default ContentLeft;