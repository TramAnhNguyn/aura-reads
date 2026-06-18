import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books, genres } from '../data/bookData';
import './BookList.css';

function BookList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
    const genreQuery = searchParams.get('genre');
    const badgeQuery = searchParams.get('badge');
    
    const [selectedGenre, setSelectedGenre] = useState(genreQuery || "All");
    const [sortBy, setSortBy] = useState("default");

    // Optional: sync state back to URL when genre changes, or just keep it simple
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
        if (genre === "All") {
            searchParams.delete('genre');
        } else {
            searchParams.set('genre', genre);
        }
        setSearchParams(searchParams);
    };

    // Filter by genre, search query, and badge
    const filteredBooks = books.filter(book => {
        const matchesGenre = selectedGenre === "All" ? true : book.genre === selectedGenre;
        const matchesSearch = searchQuery === "" ? true : 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBadge = badgeQuery ? book.badge === badgeQuery : true;
            
        return matchesGenre && matchesSearch && matchesBadge;
    });

    // Sort books
    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // default
    });

    return (
        <div className="book-list-page">
            <div className="book-list-header">
                <h2>All Books</h2>
                {searchQuery ? (
                    <p>Showing search results for "{searchQuery}"</p>
                ) : (
                    <p>{sortedBooks.length} titles in the collection</p>
                )}
            </div>
            
            <div className="controls-container">
                <div className="genre-filters">
                    <button 
                        className={`genre-btn ${selectedGenre === "All" ? "active" : ""}`}
                        onClick={() => handleGenreChange("All")}
                    >
                        All
                    </button>
                    {genres.map(g => (
                        <button 
                            key={g.name}
                            className={`genre-btn ${selectedGenre === g.name ? "active" : ""}`}
                            onClick={() => handleGenreChange(g.name)}
                        >
                            {g.name}
                        </button>
                    ))}
                </div>

                <div className="sort-dropdown">
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="default">Featured</option>
                        <option value="title">Title A-Z</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>

            <div className="book-list-grid">
                {sortedBooks.length > 0 ? (
                    sortedBooks.map(book => <BookCard key={book.id} book={book} />)
                ) : (
                    <p className="no-books-msg">No books found for this category.</p>
                )}
            </div>
        </div>
    );
}

export default BookList;