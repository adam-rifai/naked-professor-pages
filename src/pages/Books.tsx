import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import BookCard from '@/components/BookCard';
import { Search, Filter, X } from 'lucide-react';
import { books, getAllTags, Book } from '@/data/books';

interface BooksProps {
  onBookSelect: (book: Book) => void;
}

const Books = ({ onBookSelect }: BooksProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');

  const allTags = getAllTags();

  const filteredAndSortedBooks = useMemo(() => {
    let filtered = books;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(book => book.tags.includes(selectedTag));
    }

    // Sort books
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.year - a.year;
        case 'oldest':
          return a.year - b.year;
        case 'az':
          return a.title.localeCompare(b.title);
        case 'za':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchTerm, selectedTag, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setSortBy('newest');
  };

  const hasActiveFilters = searchTerm || selectedTag || sortBy !== 'newest';

  return (
    <main className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Books & Publications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my collection of mathematics textbooks, educational resources, and research publications 
            designed to make learning accessible and engaging.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag filter */}
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Subjects</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary">
                  Search: "{searchTerm}"
                </Badge>
              )}
              {selectedTag && (
                <Badge variant="secondary">
                  Subject: {selectedTag}
                </Badge>
              )}
              {sortBy !== 'newest' && (
                <Badge variant="secondary">
                  Sort: {sortBy === 'oldest' ? 'Oldest First' : 
                         sortBy === 'az' ? 'A-Z' : 'Z-A'}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedBooks.length} of {books.length} book{books.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Books grid */}
        {filteredAndSortedBooks.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onReadMore={onBookSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No books found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Books;