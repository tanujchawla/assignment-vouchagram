import React from 'react';
import Category from '../../components/Category/Category';
import axios from 'axios';

const categoryIndexPage = (props) => {
    return <Category {...props} />;
}

const fetchCategories = async () => {
    return await axios.get('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop')
    .then(res => {
        let categories = res && res.data && res.data.category || [];
        return {
            categories : categories,
            error : null
        }
    })
    .catch(error => {
        return {
            categories : [],
            error : true
        }
    })
}

export const getServerSideProps = async () => {
    const categories = await fetchCategories();

    return {
        props : categories
    }
}

export default categoryIndexPage;