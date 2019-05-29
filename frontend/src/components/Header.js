import React from 'react';

const CustomHeader = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a className="navbar-links" href="/#">JG ERP</a>
                <a className="navbar-links" href="/">Home</a>
                <a className="navbar-links" href="/accounts">Accounts</a>
                <a className="navbar-links" href="/#">Statements</a>
                <a className="navbar-links" href="/#">About</a>
            </div>
        </nav>
    )
}

export default CustomHeader;