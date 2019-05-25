import React from 'react';

import CustomHeader from '../components/Header';



const CustomLayout = (props) => {
    return (
        <div>

            <CustomHeader />            

            <div>

                <div style={{ padding: '0 50px', textAlign: 'center' }}>
                    {props.children}

                </div>
                    
            </div>


        </div>

    );
}
 export default CustomLayout