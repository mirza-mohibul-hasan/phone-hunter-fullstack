import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Hedar Header</h1>
            <Link to= '/phones'>Nanir Phone</Link>
        </div>
    );
};

export default Header;