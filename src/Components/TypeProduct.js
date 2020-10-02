import React from 'react'

function TypeProduct(props) {
    return (
        <div className="typeProduct">
            <a href={props.href}>{props.title}</a>
        </div>
    )
}

export default TypeProduct;