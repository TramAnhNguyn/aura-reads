import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BagProvider } from './context/BagContext';
import Footer from './features/Footer/Footer'
import Header from './features/Header/Header'
import './index.css';
import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Bag from './pages/Bag';
import Developing from './pages/Developing';
import { ToastProvider } from './context/ToastContext';

function App() {

  return (
    <Router>
      <ToastProvider>
        <BagProvider>
          <div className="app-shell">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/developing" element={<Developing />} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </BagProvider>
      </ToastProvider>
    </Router>
  )
}

export default App
