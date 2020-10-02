import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import PropTypes from 'prop-types'

import Products from './Products'

function ProductList(props) {

    return (
        <div className="productList">

            <Router>
                <Switch>
                    <Route exact path="/catalog" children={()=><Products type={"Products"}></Products>}/>
                    <Route exact path="/catalog/purehoney" children={()=><Products type={"Чистый мёд"}></Products>}/>
                    <Route exact path="/catalog/creamhoney" children={()=><Products type={"Крем-мёд"}></Products>}/>
                    <Route exact path="/catalog/otherproducts" children={()=><Products type={"Прочее"}></Products>}/>
                </Switch>
            </Router>

        </div>
    )
}

export default ProductList