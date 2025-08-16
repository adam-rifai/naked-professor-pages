import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
  onReadMore: (book: Book) => void;
}

const BookCard = ({ book, onReadMore }: BookCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-lg">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <CardHeader className="space-y-2">
        <div className="space-y-1">
          <h3 className="font-semibold line-clamp-2 text-foreground">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {book.subtitle}
            </p>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {book.year} • {book.publisher || 'Academic Press'}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-foreground/80 line-clamp-3">
          {book.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {book.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {book.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{book.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
          onClick={() => onReadMore(book)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;