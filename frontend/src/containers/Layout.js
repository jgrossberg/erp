import React from 'react';

import CustomHeader from '../components/Header';

const CustomLayout = (props) => {
    return (
        <div>
            <CustomHeader />            
                <div style={{ padding: '0 100px', textAlign: 'center' }}>
                    {props.children}
                </div>             
        </div>
    );
}
 export default CustomLayout