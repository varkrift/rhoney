import React from 'react';
import ProductItem from './ProductItem'

import aca from '../img/productsImg/aca.jpeg'
import lipa from '../img/productsImg/lipa.jpeg'
import oduvan from '../img/productsImg/oduvan.jpeg'
import roz from '../img/productsImg/roz.jpeg'

function Products(props) {

    let [products] = React.useState([
        {
            id: 1,
            name: "Акация",
            type: "Чистый мёд",
            volume: 1000,
            count: 0,
            img: aca
        },

        {
            id: 2,
            name: "Липа",
            type: "Крем-мёд",
            volume: 1000,
            count: 0,
            img: lipa
        },

        {
            id: 3,
            name: "Донник",
            type: "Прочее",
            volume: 1000,
            count: 0,
            img: oduvan
        },

        {
            id: 4,
            name: "Майский",
            type: "Чистый мёд",
            volume: 1000,
            count: 0,
            img: roz
        },

        {
            id: 5,
            name: "Гречиха",
            type: "Крем-мёд",
            volume: 1000,
            count: 0,
            img: lipa
        },

        {
            id: 6,
            name: "Кипрей",
            type: "Чистый мёд",
            volume: 1000,
            count: 0,
            img: oduvan
        },

        {
            id: 7,
            name: "Лесной",
            type: "Чистый мёд",
            volume: 1000,
            count: 0,
            img: roz
        },

        {
            id: 8,
            name: "Луговой",
            type: "Чистый мёд",
            volume: 1000,
            count: 0,
            img: lipa
        },
    ])

    let productList = props.type === "Products" ? products : products.filter( product => product.type === props.type)

    return(
        <div className="products">
            {
                productList.map( (product, index) => <ProductItem product={product} key={index} index={index} id={product.id}></ProductItem>)
            }
        </div>
    )
}

export default Products