import React from 'react'
import Search from './Search';
import TypeProduct from './TypeProduct';
import ProductItemInCart from './ProductItemInCart'

// import ProductList from './ProductList';


function Cart(props) {

    // const name = localStorage.getItem("name")
    // alert(sessionStorage.getItem(1))
    // sessionStorage.setItem(1, "h")

    let [productsCart, setProductsCart] = React.useState([
        // {
        //     id: 0,
        //     name: "name",
        //     type: "type",
        //     volume: 0,
        //     count: 0,
        //     img: "img",
        // }
    ])

    // function addToProductsCart(newProduct) {
        
    // }

    // removeProductCart = (id) => {
    //     setProductsCart(productsCart.filter(product => { return product.id !== id }))
    //     localStorage.remove(String(this.state.id))
    // };

    console.log(productsCart)

    for(let i=0; i<sessionStorage.length; i++) {

        let key = sessionStorage.key(i);
        let newProduct = sessionStorage.getItem(key);

        newProduct = newProduct.split('|');

        newProduct = {
            id: Number(key),
            name: newProduct[0],
            type: newProduct[1],
            volume: Number(newProduct[2]),
            count: Number(newProduct[3]),
            img: newProduct[4],
        }

        productsCart.push(newProduct);
    }

    // const listItems = productsCart.map(( user, index ) =>
    //     <li key={ index.toString() } >                      
    //         { user.name }
    //     </li>
    // );

    return (
        <div className="catalog">
        <div className="leftField">

            <Search></Search>

            <div className="menuTypesProduct menuCartProduct">
                    <div className="typeProduct titleTypesProducts titleTypesProductsCart">
                        <a href="/catalog">Оформление заявки:</a>
                    </div>
                    
                    <TypeProduct title="Имя:"></TypeProduct>
                    <input
                    type="text"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    // placeholder="Поиск"
                    />
                    <TypeProduct title="Контактный номер:"></TypeProduct>
                    <input
                    type="text"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    // placeholder="Поиск"
                    />

            </div>

            <div className="productToEmail">
                <button type="button">
                        Отправить
                </button>
            </div>
            

        </div> 

        <div className="catalogField">
            
            <div className="filterField">
                <p style={{cursor:'default'}}>Ваша корзина:</p>
            </div>

            <div className="products">
            {
                productsCart.map( (product, index) => <ProductItemInCart product={product} key={index} index={index} id={product.id}></ProductItemInCart>)
            }
            </div>

        </div>

    </div>
    )
}

export default Cart;