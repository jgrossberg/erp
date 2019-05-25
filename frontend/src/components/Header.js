import React from 'react';

const CustomHeader = (props) => {

    return (
        <nav className="navbar">
        <div className="navbar-container">
        {/* <div className="container-fluid"> */}
            <div>
                <a className="navbar-links" href="/#">JG ERP</a>
                <a className="navbar-links" href="/">Home</a>
                <a className="navbar-links" href="/accounts">Accounts</a>
                <a className="navbar-links" href="/#">About</a>
            </div>
    
        </div>
        </nav>
            
    )

}

export default CustomHeader;