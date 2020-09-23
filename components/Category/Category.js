import React, { Component } from 'react';
import Layout from '../Layout';
import { Alert, ListGroup } from 'react-bootstrap';
import Router from 'next/router';

class Category extends Component {

    categoryClickHandler = (categoryId) => {
        Router.push({
            pathname : '/category/products',
            query : {
                pageNo : 1,
                categoryId : categoryId
            }
        });
    }

    render() {

        let errorAlert = this.props.error ? 
            <Alert variant="danger" style={{margin : '20px', width : '20%'}} >
                <strong>x</strong> An error occured!
            </Alert> : null;

        let categories = this.props.categories.map(category => {
            return <ListGroup.Item
                    style={{ cursor : 'pointer' }}
                    key={category.id}
                    onClick={() => this.categoryClickHandler(category.id)}
                >
                    <div className={['row', 'col-12'].join(' ')}>
                        <div className={['col-8'].join(' ')}>
                            {category.name}
                        </div>
                        <div className={['col-4'].join(' ')}>
                            <img src={category.image} alt={'No image found'} />
                        </div>
                    </div>
                </ListGroup.Item>;
        });

        return <Layout content={(
            <div>
                {errorAlert}
                <ListGroup style={{ margin : '40px 30px', width : '90%' }}>
                    {categories}
                </ListGroup>
            </div>
        )} />

    }

}

export default Category;