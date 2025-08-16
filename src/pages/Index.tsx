import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookModal from '@/components/BookModal';
import Home from '@/pages/Home';
import Books from '@/pages/Books';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import { Book } from '@/data/books';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
    setSelectedBook(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} onBookSelect={handleBookSelect} />;
      case 'books':
        return <Books onBookSelect={handleBookSelect} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} onBookSelect={handleBookSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer />
      
      <BookModal
        book={selectedBook}
        isOpen={isBookModalOpen}
        onClose={handleCloseBookModal}
      />
    </div>
  );
};

export default Index;
