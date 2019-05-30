import React from 'react';

import Header from '../components/Header';

const Layout = (props) => {
    return (
        <div>
            <Header />            
                <div style={{ padding: '0 100px', textAlign: 'center' }}>
                    {props.children}
                </div>             
        </div>
    );
}
 export default Layout