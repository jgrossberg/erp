import React from 'react';
import { Layout, } from 'antd';

const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">

        <Header />

        <Content style={{ padding: '0 50px', textAlign: 'center' }}>

            <p style={{ margin: '16px 0' }}>&nbsp;</p>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
            </div>


        </Content>

        <Footer style={{ textAlign: 'center' }}>
            Jonah Grossberg
        </Footer>
        
        </Layout>
    )
}
 export default CustomLayout