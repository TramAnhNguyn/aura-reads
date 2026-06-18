import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books, genres } from '../data/bookData';
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/slider/slide1.jpg',
        '/slider/slide2.png',
        '/slider/slide3.jpg',
        '/slider/slide4.jpeg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="homepage">
            
            <section 
                className="hero"
                style={{ backgroundImage: `url(${slides[currentSlide]})` }}
            >
                <div className="hero-overlay">
                    <p className="overline">STAFF FAVOURITES</p>
                    <h1 style={{color: "white"}}>The shelves we keep coming back to</h1>
                    <p>Our booksellers pick the titles they can't stop pressing into customers' hands.</p>
                    
                </div>
            </section>

            {/* 2. Genre Grid */}
            <section className="genres-section">
                <h3 className="section-overline">FIND YOUR SHELF</h3>
                <h2>Browse by genre</h2>
                <div className="genre-grid">
                    {genres.map((g, index) => (
                        <div 
                            key={index} 
                            className="genre-card" 
                            style={{ backgroundColor: g.color }}
                            onClick={() => navigate(`/shop?genre=${encodeURIComponent(g.name)}`)}
                        >
                            <h3>{g.name}</h3>
                            <p>2 titles</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Featured Section */}
            <BookSection title="Featured this month" overline="EDITOR'S PICKS" books={books.slice(0, 4)} />

            {/* 4. Promo Banner */}
            <section className="promo-banner">
                <div className="promo-content-left">
                    <h3>THE READING ROOM</h3>
                    <h2 style={{color: "white", fontSize: "60px"}}>Free shipping on every order over $35</h2>
                    <p>Plus 15% off your first month and a weekly recommendation picked just for you.</p>
                </div>

                <div className="promo-content-right">
                    <button className="join-btn">Join free</button>
                </div>
            </section>

            {/* 5. Bestsellers Section */}
            <BookSection title="Best Sellers" overline="MOST LOVED" books={books.slice(4, 8)} />

            {/* 6. New Arrivals Section */}
            <BookSection title="New arrivals" overline="HOT OFF THE PRESS" books={books.slice(8, 12)} />
        </div>
    );
}

// Reusable Section Component
function BookSection({ title, overline, books }) {
    return (
        <section className="book-section">
            <div className="section-header">
                <div>
                    <h3 className="section-overline">{overline}</h3>
                    <h2>{title}</h2>
                </div>
                <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>View all →</Link>
            </div>
            <div className="book-list">
                {books.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
        </section>
    );
}

export default HomePage;