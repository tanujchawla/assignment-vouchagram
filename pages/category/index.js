import React from 'react';
import Category from '../../components/Category/Category';

const categoryIndexPage = (props) => {
    return <Category />;
}

categoryIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        resolve({});
    })
    return promise;
}

export default categoryIndexPage;