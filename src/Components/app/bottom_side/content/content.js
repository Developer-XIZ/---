import React from 'react';
import ContentLeft from './content_left';
import ContentRight from './content_right';
import './content.css';

const Content = () => {
    return (
        <div className="content">
            <ContentLeft />
            <ContentRight />
        </div>
    );
}

export default Content;