import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');
    const { showToast } = useToast();

    const handleSubmit = () => {
        showToast("Thanks for joining our newsletter!");
        setEmail('');
    }
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="brand-header">
                            <span className="logo-icon">✧</span> <h4>Aura Reads</h4>
                        </div>
                        <p>A modern sanctuary for readers seeking extraordinary stories. Curating magic since 2024.</p>
                        <div className="social-links">
                            <button>In</button> <button>X</button> <button>f</button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h5>SHOP</h5>
                        <Link to="/shop?badge=NEW">New arrivals</Link>
                        <Link to="/shop?badge=BEST%20SELLER">Best Sellers</Link>
                        <Link to="/shop?genre=Fiction">Fiction</Link>
                        <Link to="/shop?genre=Children">Children</Link>
                        <Link to="/developing">Gift cards</Link>
                    </div>

                    <div className="footer-section">
                        <h5>ABOUT</h5>
                        <Link to="/developing">Our story</Link>
                        <Link to="/developing">Events</Link>
                        <Link to="/developing">Visit the shop</Link>
                        <Link to="/developing">Journal</Link>
                    </div>

                    <div className="footer-section">
                        <h5>HELP</h5>
                        <Link to="/developing">Shipping</Link>
                        <Link to="/developing">Returns</Link>
                        <Link to="/developing">FAQ</Link>
                        <Link to="/developing">Contact</Link>
                    </div>

                    <div className="footer-newsletter">
                        <h5>THE READING ROOM</h5>
                        <p>One handpicked recommendation in your inbox each week.</p>
                        <div className="email-subscription">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="join-btn" onClick={handleSubmit}>Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Aura Reads · Privacy · Terms</p>
                    <p>Free shipping on orders over $35</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;