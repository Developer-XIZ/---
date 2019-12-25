import React from 'react';
import Content from './content';
import Footer from './footer';
import './bottom_side.css';

const BottomSide = () => {
    return (
        <div className="bottom_side">
            <Content />
            <Footer />
        </div>
    );
}

export default BottomSide;