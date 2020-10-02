import React from 'react'
import Search from './Search';
import TypeProduct from './TypeProduct';
import ProductList from './ProductList';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Catalog(props) {
    return (
        <div className="catalog">
            <div className="leftField">

                <Search></Search>

                <div className="menuTypesProduct">
                    <div className="typeProduct titleTypesProducts">
                        <a href="/catalog">Тип товара:</a>
                    </div>
                    <TypeProduct title="Чистый мёд" href="/catalog/purehoney"></TypeProduct>
                    <TypeProduct title="Крем-мёд" href="/catalog/creamhoney"></TypeProduct>
                    <TypeProduct title="Прочее" href="/catalog/otherproducts"></TypeProduct>
                </div>

            </div> 

            <div className="catalogField">
                
                <div className="filterField">
                <Router>
                    <Switch>
                        {/* <Route path="/catalog" component={<div>Продукция</div>} /> */}
                        <Route path='/catalog' render={(props) => (
                            <p>Продукция</p>
                        )}/>
                        
                        <Route path='/purehoney' render={(props) => (
                            <p>Чистый мёд</p>
                        )}/>
                    </Switch>
                </Router>
                
                    {/* <p style={{cursor:'default'}}>{window.location.href}</p> */}
                </div>

                <ProductList></ProductList>
            </div>

        </div>
    )
}

export default Catalog;