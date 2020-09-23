import React from 'react';
import { Pagination } from "react-bootstrap";

const pagination = (props) => {

    const totalPages = props.totalPages;

    if(totalPages === 0) return null;

    let pageItems = [];

    let offset = (props.tillPage - props.maxPageItems) >= 0 ? props.tillPage - props.maxPageItems : 0;
    let limit = offset + props.maxPageItems;

    if(limit > totalPages) {
        limit = totalPages;
    }

    for(let i = offset; i < limit; i++) {
        let number = i+1;
        pageItems.push(
            <Pagination.Item key={number} active={number === props.pageNo} onClick={() => props.pageSelectHandler(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div style={{ margin : '30px 40px' }}>
            <Pagination size="sm">
                <Pagination.Prev disabled={!(props.tillPage > props.maxPageItems)} onClick={() => props.prevNextHandler('prev')}/>
                {pageItems}
                <Pagination.Next disabled={!(totalPages > props.tillPage)} onClick={() => props.prevNextHandler('next')}/>
            </Pagination>
        </div>
    );

}

export default pagination;