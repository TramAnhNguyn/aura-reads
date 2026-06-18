import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BagContext } from '../../context/BagContextDefinition';
import './Header.css'; 

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { getTotalItems } = useContext(BagContext);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="logo-icon">✧</span>
                    <span className="brand-name">Aura Reads</span>
                </Link>
            
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop All</Link>
                    <Link to="/shop?genre=Fiction">Fiction</Link>
                    <Link to="/shop?genre=Mystery">Mystery</Link>
                    <Link to="/shop?genre=Children">Children</Link>
                    <Link to="/shop?genre=Poetry">Poetry</Link>
                </nav>

                <div className="header-actions">
                    <input 
                        type="text" 
                        placeholder="Search titles, authors..." 
                        className="search-bar" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
                                setSearchQuery(''); // Clear after search
                            }
                        }}
                    />
                    <button className="sign-in-btn" onClick={() => setIsModalOpen(true)}>Sign in</button>
                    <div className="bag-icon" onClick={() => navigate('/bag')} style={{ cursor: 'pointer' }}>
                        <button className="bag-btn">Bag</button>
                        <span className="bag-count">{getTotalItems()}</span>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setIsModalOpen(false)}>×</span>
                        <div className="modal-header">
                            <span className="logo-icon">P</span>
                            <h2>Welcome back</h2>
                        </div>
                        <p>Sign in to access your bag, orders and wishlist.</p>
                        
                        <label>EMAIL</label>
                        <input type="email" placeholder="you@example.com" />
                        
                        <label>PASSWORD</label>
                        <input type="password" placeholder="••••••••" />
                        
                        <button className="submit-btn">Sign in</button>
                        <p className="footer-text">New here? <span>Create an account</span></p>
                    </div>
                </div>
            )}
            
        </header>
    );
}

export default Header;