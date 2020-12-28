import React from 'react';

const Book = ({date}) => {
    return (
        <div style={{marginTop:"1rem"}}>
            <h1 style={{textAlign:"center"}}> Book Your appointment on <span style={{color:"#1cc7c1"}}>{date.toDateString()}</span></h1>
        </div>
    );
};

export default Book;