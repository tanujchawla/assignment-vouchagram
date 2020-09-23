import React, { Component } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
import Router from 'next/router';

class Category extends Component {

    state = {
        categories : [],
        loading : false,
        error : null,
    }

    componentDidMount() {

        this.setState({ loading : true });
        
        axios.get('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop')
            .then(res => {
                let categories = res && res.data && res.data.category || [];
                this.setState({
                    loading : false,
                    categories : categories,
                    error : null
                });
            })
            .catch(error => {
                this.setState({
                    loading : false,
                    error : error
                })
            })
    }

    alertClickHandler = () => {
        this.setState({
            error : null
        })
    }

    categoryClickHandler = (categoryId) => {
        Router.push({
            pathname : '/category/products',
            query : {
                categoryId : categoryId
            }
        });
    }

    render() {

        let spinner = this.state.loading ? <Spinner style={{ position : 'fixed', top : '50%', left : '50%' }} animation="border" /> : null;

        let errorAlert = this.state.error ? 
            <Alert variant="danger" onClick={this.alertClickHandler} style={{margin : '20px', width : '20%', cursor : 'pointer'}} >
                <strong>x</strong> An error occured!
            </Alert> : null;

        let categories = this.state.categories.map(category => {
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
                {spinner}
                {errorAlert}
                <ListGroup style={{ margin : '40px 30px', width : '90%' }}>
                    {categories}
                </ListGroup>
            </div>
        )} />

    }

}

export default Category;