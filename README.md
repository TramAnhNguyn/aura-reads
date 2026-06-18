# ✧ Aura Reads - E-commerce Bookstore

Aura Reads is a modern, responsive, and fully functional front-end e-commerce application built with React.js. It features a sleek user interface, dynamic product filtering, seamless global state management for the shopping bag, and customized user interactions.

## 🚀 Live Demo & Screenshots
*(You can add screenshots or deployment links here)*

## ✨ Key Features

- **Responsive Design**: Built entirely with pure CSS (Flexbox & Grid), ensuring a pixel-perfect experience across Desktop, Tablet, and Mobile devices.
- **Dynamic Routing**: Utilizes `react-router-dom` for smooth transitions between the Home, Shop, Book Details, and Bag pages.
- **Advanced Filtering & Sorting**: Users can search for books by title or author, filter by genres/badges, and sort by price, rating, or title.
- **Global Cart Management**: Features a robust `BagContext` that allows users to add/remove books, update quantities, and auto-calculates subtotals and taxes.
- **Custom Toast Notifications**: Replaced default browser alerts with a customized, non-intrusive Toast notification system for a premium UX.
- **Image Slider**: Automatic scrolling hero banner on the homepage.

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Routing**: React Router v6
- **Styling**: Pure CSS (No external UI libraries like Bootstrap or Tailwind)
- **State Management**: React Context API & React Hooks (`useState`, `useEffect`, `useContext`)

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (e.g., BookCard)
├── context/        # Global state providers (BagContext, ToastContext)
├── data/           # Mock data for books and categories
├── features/       # Major layout features (Header, Footer)
├── pages/          # Application routes (Home, Shop, Details, Bag)
├── App.jsx         # App entry and Route configuration
└── index.css       # Global CSS tokens and variables
```

## 💻 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd ezgames-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View in browser**
   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 🎨 Design Philosophy
- **Semantic HTML**: Ensures better accessibility and SEO.
- **Separation of Concerns**: Logic, styling, and data are strictly decoupled.
- **Performance**: Optimized rendering with proper hooks and functional components.

---
*Developed as a front-end evaluation project.*
