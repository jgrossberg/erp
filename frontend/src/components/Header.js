import React from 'react';

const CustomHeader = (props) => {

    return (
        <nav className="jonah-navbar">
        <div className="jonah-navbar-container">
        {/* <div className="container-fluid"> */}
            <div>
                <a className="jonah-navbar-links" href="/#">ERP</a>
                <a className="jonah-navbar-links" href="/#">Home</a>
                <a className="jonah-navbar-links" href="/accounts">Accounts</a>
                <a className="navbar-brand" href="/#">About</a>
            </div>
    
        </div>
        </nav>
            
    )

}

export default CustomHeader;