import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../context/BagContextDefinition';
import { useToast } from '../context/ToastContext';
import './Bag.css';

function Bag() {
    const navigate = useNavigate();
    const { bagItems, removeBag, updateQuantity, getTotalPrice } = useContext(BagContext);
    const { showToast } = useToast();

    const handleCheckout = () => {
        showToast("Your order is on its way to being processed!");
        navigate("/");
    }

    return (
        <div className="bag-container">
            <div className="breadcrumb">
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a04a32', textDecoration: 'underline' }}>
                    Home
                </button>
                / Bag
            </div>

            <h1>Your Bag</h1>

            {bagItems.length === 0 ? (
                <div className="empty-bag">
                    <p>Your bag is empty</p>
                    <button className="continue-shopping" onClick={() => navigate('/')}>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="bag-content">
                    <div className="bag-items">
                        <table className="items-table">
                            <thead>
                                <tr>
                                    <th>Book</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bagItems.map(item => (
                                    <tr key={item.id} className="item-row">
                                        <td className="item-name">
                                            <div className="item-cover" style={item.image.startsWith('#') ? { background: `linear-gradient(135deg, ${item.image} 70%, rgba(115, 110, 110, 0.5) 100%)` } : {}}>
                                                {item.image.startsWith('/') && <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />}
                                            </div>
                                            <div>
                                                <p className="title">{item.title}</p>
                                                <p className="author">{item.author}</p>
                                            </div>
                                        </td>
                                        <td className="item-price">${item.price.toFixed(2)}</td>
                                        <td className="item-quantity">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </td>
                                        <td className="item-total">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="item-remove">
                                            <button onClick={() => removeBag(item.id)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                        <button className="continue-shopping-btn" onClick={() => navigate('/')}>
                            Continue Shopping
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
                            You'll be asked to sign in to complete your order
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bag;
