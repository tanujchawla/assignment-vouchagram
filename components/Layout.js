import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Vouchagram Assignment
                </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            </Head>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/category" passHref>
                            <Nav.Link>Categories</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {props.content}
        </React.Fragment>
    );
}

export default Layout;