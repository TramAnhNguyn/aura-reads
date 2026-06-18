import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BagContext } from '../context/BagContextDefinition';
import { books } from '../data/bookData';
import './BookDetail.css';

function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToBag } = useContext(BagContext);
    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return (
            <div className="book-detail-container">
                <div>
                    <h2>Can't find the book you want</h2>
                    <button onClick={() => navigate('/')}>Back to Home Page</button>
                </div>
            </div>
        );
    }

    const handleAddToBag = () => {
        addToBag(book);
        alert(`"${book.title}" has been added to your bag!`);
    };

    return (
        <div className="book-detail-container">
            <div className="breadcrumb">
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a04a32', textDecoration: 'underline' }}>
                    Home
                </button>
                / Books / {book.title}
            </div>
            
            <div className="book-main">
                <div className="book-cover">
                    <div className="cover-image" style={book.image.startsWith('#') ? { background: `linear-gradient(135deg, ${book.image} 70%, rgba(115, 110, 110, 0.5) 100%)` } : { padding: 0 }}>
                        {book.image.startsWith('/') ? (
                            <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        ) : (
                            book.title
                        )}
                    </div>
                </div>

                <div className="book-info">
                    <div className="book-info-top">
                        <span className="genre-tag">{book.genre}</span>
                        <h1>{book.title}</h1>
                        <p className="author">by {book.author}</p>
                        <div className="rating-info">
                            <span>★ {book.rating}</span> · <span>{book.pages} pages</span> · <span>{book.published}</span>
                        </div>
                        
                        <div className="price-box">
                            <span className="current-price">${book.price.toFixed(2)}</span>
                            {book.oldPrice && <span className="old-price" style={{fontSize: "20px"}}>${book.oldPrice.toFixed(2)}</span>}
                        </div>

                        <p className="description">
                            {book.description}
                        </p>

                        <div className="action-buttons">
                            <button className="add-to-bag" onClick={handleAddToBag}>Add to bag — ${book.price.toFixed(2)}</button>
                            <button className="wishlist-btn">♡ Wishlist</button>
                        </div>

                        <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }}/>
                    </div>
                    
                    <div className="book-specs">
                        <div><span>FORMAT</span><p>{book.format}</p></div>
                        <div><span>PAGES</span><p>{book.pages}</p></div>
                        <div><span>PUBLISHED</span><p>{book.published}</p></div>
                        <div><span>PUBLISHER</span><p>{book.publisher}</p></div>
                        <div><span>LANGUAGE</span><p>{book.language}</p></div>
                        <div><span>ISBN</span><p>{book.isbn}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;