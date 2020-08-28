import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const coursePrice = cart[i];
        totalPrice = totalPrice + coursePrice.price;
    }

    return (
        <div className="card text-center mt-5 position-fixed">
            <div className="card-header bg-dark text-white">
                <h2>Order Summary</h2>
            </div>
            <ul className="list-group list-group-flush text-secondary">
                <li className="list-group-item">Course Added: {cart.length}</li>
                <li className="list-group-item">Total Price: ${totalPrice}</li>
            </ul>
            <div class="card-footer">
                <button className="btn btn-outline-secondary btn-center">Place Your Order</button>
            </div>
        </div>
    );
};

export default Cart;