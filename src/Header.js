import React from 'react';

const Header = ({title}) => {
    
    return (
        <header>
            <h1>{title}</h1>
            {/* <span className="stats">Players: 1</span> */}
        </header>
    );
};

Header.defaultProps = {
    title: 'Shopping List',
};

export default Header;