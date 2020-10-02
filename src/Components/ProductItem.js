import React from 'react'
// import PropTypes from 'prop-types'

import minus from '../img/icons/minus.svg';
import plus from '../img/icons/plus.svg';


class ProductItem extends React.Component {
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

    // componentDidMount() {
    //     const rememberMe = localStorage.getItem('rememberMe') === 'true';
    //     const user = rememberMe ? localStorage.getItem('user') : '';
    //     this.setState({ user, rememberMe });
    // }

    handleCart = () => {

        let {id} = this.state;
        let product = this.state;
        // alert(sessionStorage.getItem(id));

        if(sessionStorage.getItem(id) === null) {
            sessionStorage[id] = product.toString();
            alert("if")
        }else {

        let newProduct = sessionStorage.getItem(id);
        newProduct = newProduct.split('|');

        newProduct = {
            id: Number(id),
            name: newProduct[0],
            type: newProduct[1],
            volume: Number(newProduct[2]),
            count: Number(newProduct[3]),
            img: newProduct[4],
            toString: function() {
                return `${this.name}|${this.type}|${this.volume}|${this.count}|${this.img}`;
            }
        }
        newProduct.count += Number(this.state.count);
        sessionStorage[id] = newProduct.toString();

        alert('else if');
        }



            // for(let i=0; i<sessionStorage.length; i++) {

            //     let key = sessionStorage.key(i);
            //     let newProduct = sessionStorage.getItem(key);
        
            //     // alert(newProduct);
            //     newProduct = newProduct.split(' ');
        
            //     newProduct = {
            //         id: Number(key),
            //         name: newProduct[0],
            //         type: `${newProduct[1]} ${newProduct[2]}`,
            //         volume: Number(newProduct[3]),
            //         count: Number(newProduct[4]),
            //         img: newProduct[5],
            //         toString: function() {
            //             return `${this.name} ${this.type} ${this.volume} ${this.count} ${this.img}`;
            //         }
            //     }
    
            //     if(Number(key) === Number(id)) {
            //         newProduct.count += Number(this.state.count);
            //         sessionStorage[key] = newProduct.toString();
            //         alert('if');
            //     } else {
            //         let product = this.state.toString();
            //         sessionStorage[id] = product;
            //         alert('else');
            //     }
        
            // }



        // localStorage.setItem(id, count)

        // console.log(id)

        // localStorage.setItem("count", count);

        // const name = localStorage.getItem("name")
        // console.log(name)
    };

    minusCount = () => {
        const count = this.state.count;
        if(count){
            this.setState({count: count - 1})
            // localStorage.setItem(this.state.id, count);
        }
    }

    plusCount = () => {
        const count = this.state.count;
        this.setState({count: count + 1})
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

            <button className="productToCart"  onClick={this.handleCart}>
                Добавить в корзину
            </button>
        </div>
        
      );
    }
  }

export default ProductItem
