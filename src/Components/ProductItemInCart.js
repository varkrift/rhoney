import React from 'react'
// import PropTypes from 'prop-types'

import minus from '../img/icons/minus.svg';
import plus from '../img/icons/plus.svg';


class ProductItemInCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.product.id,
            name: props.product.name,
            type: props.product.type,
            volume: props.product.volume,
            count: props.product.count,
            img: props.product.img,
            toString: function() {
                return `${this.name}|${this.type}|${this.volume}|${this.count}|${this.img}`;
            }
        };
    }

    removeProductCart = () => {
        localStorage.remove(String(this.state.id))
    };

    handleCart = () => {
        let product = this.state;
        let {id} = this.state;
        sessionStorage[id] = product.toString();
    };

    minusCount = () => {
        if(this.state.count){
            this.setState({
                count: +this.state.count - 1
        }, () => {
            this.handleCart();
        })
        }
    }

    plusCount = () => {
        this.setState({
            count: +this.state.count + 1
        }, () => {
            this.handleCart();
        })
    }
  
    render() {
      return (
        <div className="productItem">

            <div className="productImg">
                <img src={this.state.img} alt="logo"/>
            </div>

            <div className="productName">
                {this.state.name}
            </div>

            <div className="productVolume">
                Объём: {this.state.volume} г.
            </div>

            <div className="productCount">
                <div>Кол-во:</div>
                <button className="productCountIcon" onClick={this.minusCount}><img src={minus} alt="minus"></img></button> 
                <div>{this.state.count}</div>
                <button className="productCountIcon" onClick={this.plusCount}><img src={plus} alt="plus"></img></button>
            </div>

            <button className="productDelete"  onClick={this.removeProductCart}>
                Удалить
            </button>
        </div>
        
      );
    }
  }

export default ProductItemInCart
