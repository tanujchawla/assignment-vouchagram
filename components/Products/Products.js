import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import { Alert, Spinner, Table } from 'react-bootstrap';
import Layout from '../Layout';
import dummyApiResponse from './dummyApiResponse';

class Products extends Component {

    state = {
        products : [],
        loading : false,
        error : null,
        totalPages : 0,
        pageNo : 1,
        tillPage : 5,
        maxPageItems : 5
    }

    componentDidMount() {
        this.fetchProducts(this.state.pageNo, this.props.categoryId);
    }

    alertClickHandler = () => {
        this.setState({
            error : null
        })
    }

    fetchProducts(pageNo, categoryId) {

        this.setState({ loading : true });
        
        axios.get(`https://testing.pogo91.com/api/online-store/category/product?store_prefix=cake-shop&page=${pageNo}&category_id=${categoryId}`)
            .then(res => {
                let products = res && res.data && res.data.products || [];
                let totalPages = res && res.data && res.data.num_pages || 0;
                this.setState({
                    loading : false,
                    products : products,
                    totalPages : totalPages,
                    error : null
                });
            })
            .catch(error => {
                // fetching dummy response as API is giving CORS error
                let dummyRes = dummyApiResponse;

                let products = dummyRes && dummyRes && dummyRes.products || [];
                let totalPages = dummyRes && dummyRes && dummyRes.num_pages || 0;
                this.setState({
                    loading : false,
                    products : products,
                    totalPages : totalPages,
                    error : null
                });
            })
    }

    handlePageSelect = (number) => {
        this.setState({ pageNo : number });
        this.fetchProducts(number, this.props.categoryId);
    }

    handlePrevNext = (action) => {
        let tillPage = null;
        if(action === 'prev') {
            tillPage = this.state.tillPage - this.state.maxPageItems;
        } else if(action === 'next') {
            tillPage = this.state.tillPage + this.state.maxPageItems;
        }

        this.setState({ tillPage : tillPage })
    }

    render() {

        let spinner = this.state.loading ? <Spinner style={{ position : 'fixed', top : '50%', left : '50%' }} animation="border" /> : null;

        let errorAlert = this.state.error ? 
            <Alert variant="danger" onClick={this.alertClickHandler} style={{margin : '20px', width : '20%', cursor : 'pointer'}} >
                <strong>x</strong> An error occured!
            </Alert> : null;

        let tableData = this.state.products.map(product => {
            let stock = product['price_stock'];

            if(stock.length) {

                let discountNumber = Number(((stock[0].mrp - stock[0].selling_price)/stock[0].mrp) * 100).toFixed(2);

                let discount = discountNumber === 'NaN' ? '0.00%' : discountNumber + '%';

                return <tr key={product.product_id}>
                    <td>{product.product_name || ''}</td>
                    <td>{stock[0].name || ''}</td>
                    <td><del>₹ {stock[0].mrp}</del>  ₹ {stock[0].selling_price}</td>
                    <td>{discount}</td>
                    <td><img src={product.image_url} alt={'No image Found'} /></td>
                </tr>

            } else {
                return <tr key={product.product_id}>
                    <td>{product.product_name || ''}</td>
                    <td style={{color : 'red'}}>Out Of Stock</td>
                    <td>-</td>
                    <td>-</td>
                    <td><img src={product.image_url} alt={'No image Found'}></img></td>
                </tr>
            }
        })

        let productTable = !this.state.error ? (
            <Table striped bordered hover style={{width : '90%', marginLeft : '40px', marginTop : '30px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        ) : null;


        return <Layout content={(
            <React.Fragment>
                {spinner}
                {errorAlert}
                {productTable}
                <Pagination
                    totalPages={this.state.totalPages}
                    pageNo={this.state.pageNo}
                    tillPage={this.state.tillPage}
                    maxPageItems={this.state.maxPageItems}
                    pageSelectHandler={this.handlePageSelect}
                    prevNextHandler={this.handlePrevNext}
                />
            </React.Fragment>
        )} />;
    }
}

export default Products;