import React from 'react';
import Products from './../../components/Products/Products';
import axios from 'axios'

const productsPage = (props) => {
    return <Products {...props} />;
}

const fetchProducts = async (pageNo, categoryId) => {
    return await axios.get(`https://testing.pogo91.com/api/online-store/category/product?store_prefix=cake-shop&page=${pageNo}&category_id=${categoryId}`)
    .then(res => {
        let products = res && res.data && res.data.products || [];
        let totalPages = res && res.data && res.data.num_pages || 0;
        return {
            products : products,
            totalPages : totalPages,
            error : null
        };
    })
    .catch(error => {
        return {
            products : [],
            totalPages : 0,
            error : true
        };
    })
}

export const getServerSideProps = async ({ query }) => {
    const { pageNo, categoryId } = query;
    const data = await fetchProducts(pageNo, categoryId);

    return {
        props : {
            ...data,
            categoryId,
            pageNo
        }
    }
}

export default productsPage;