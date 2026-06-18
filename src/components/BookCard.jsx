import { useNavigate } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="book-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            {/* Image box with overlay text */}
            <div className="image-container" style={book.image.startsWith('#') ? { background: `linear-gradient(135deg, ${book.image} 70%,  rgba(115, 110, 110, 0.5) 100%)` } : {}}>
                {book.image.startsWith('/') && <img src={book.image} alt={book.title} className="book-cover-img" />}
                
                {book.badge === 'NEW' && <span className="badge badge-new">{book.badge}</span>}
                {book.badge === 'BEST SELLER' && <span className="badge badge-bestseller">{book.badge}</span>}
                
                {book.image.startsWith('#') && (
                    <div className="text-overlay">
                        <h4>{book.title}</h4>
                        <p className="author">{book.author}</p>
                    </div>
                )}
            </div>

            {/* Bottom text repetition */}
            <div className="book-info">
                <h4 className="title-bottom">{book.title}</h4>
                <p className="author-bottom">{book.author}</p>
                <div className="price-row">
                    <div className="price-group">
                        <span className="price">${book.price.toFixed(2)}</span>
                        {book.oldPrice && <span className="old-price">${book.oldPrice.toFixed(2)}</span>}
                    </div>
                    <span className="rating">★ {book.rating}</span>
                </div>
            </div>
        </div>
    );
}

export default BookCard;