import React, { Component } from 'react';
import Home from '../components/Home';

class IndexPage extends Component {

    // It is an async method, we can use async await as well or return a promise,
    // the page will load only after this method returns something
    static async getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            // we can return any props that we want
            resolve({});
        })
        return promise;
    }

    render() {
        return <Home />;
    }
}

export default IndexPage;