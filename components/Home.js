import React from 'react';
import Layout from './Layout';

const Home = (props) => {

    return <Layout content={(
        <div>
            <h3 style={{ margin : '40px' }}>Welcome to Our App.</h3>
            <h6 style={{ margin : '0px 40px'}}>Look into the categories section to check out the products we have to offer.</h6>
        </div>
    )} />;

}

export default Home;