import { useRouter } from 'next/router';
import React from 'react';
import Products from './../../components/Products/Products';

const productsPage = (props) => {
    let router = useRouter();
    let { categoryId } = router.query;
    return <Products categoryId={categoryId}/>;
}

productsPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        resolve({});
    })
    return promise;
}

export default productsPage;