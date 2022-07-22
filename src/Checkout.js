import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';

function Checkout() {
    
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="check__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Smart-choice/D38878434_IN_PC_Laptops_BAU-February-Smart-choice-laptops_1500x300_2.jpg" alt=""/>
                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className= "checkout__title">
                        Your Shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image={item.image}
                            price = {item.price}
                            rating= {item.rating}
                        />
                    ))}
                    
                </div> 
            </div>

            <div className ="checkout__right">
                <Subtotal/>
            </div>

        </div>
  )
}

export default Checkout