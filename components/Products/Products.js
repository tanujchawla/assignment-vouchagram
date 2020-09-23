import React, { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import { Alert, Spinner, Table } from 'react-bootstrap';
import Layout from '../Layout';
import Router from 'next/router';

class Products extends Component {

    state = {
        tillPage : 5,
        maxPageItems : 5
    }

    handlePageSelect = (number) => {
        Router.push({
            pathname : '/category/products',
            query : {
                pageNo : number,
                categoryId : this.props.categoryId
            }
        });
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

        let errorAlert = this.props.error ? 
            <Alert variant="danger" style={{margin : '20px', width : '20%'}} >
                <strong>x</strong> An error occured!
            </Alert> : null;

        let tableData = this.props.products.map(product => {
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

        if(this.props.products.length === 0) {
            tableData = <tr>
                <td colSpan="5" style={{ color : 'blue', textAlign : 'center' }} >No Products Found</td>
            </tr>
        }

        let productTable = !this.props.error ? (
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
                {errorAlert}
                {productTable}
                <Pagination
                    totalPages={this.props.totalPages}
                    pageNo={this.props.pageNo}
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