import React, { useState } from 'react';
import CartItem from './CartItem';

function ShoppingCart({ cartItems, onRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const [isCartOpen, setCartOpen] = useState(true);

    const handleCloseCart = () => {
        setCartOpen(false);
    };

    if (!isCartOpen) {
        return null;
    }

    return (
        <div className="bg-white p-4 rounded shadow-lg absolute top-14 right-4 z-10" style={{ minWidth: '20rem' }}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleCloseCart}>
                    &times;
                </button>
            </div>
            {cartItems.map((cartItem) => (
                <CartItem
                    key={cartItem.product.id}
                    cartItem={cartItem}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    onRemoveItem={onRemoveItem}
                />
            ))}
            <p className="text-xl font-semibold mt-4">Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
    );
}

export default ShoppingCart;
