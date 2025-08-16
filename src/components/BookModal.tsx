import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Download } from 'lucide-react';
import { Book } from '@/data/books';

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ book, isOpen, onClose }: BookModalProps) => {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{book.title}</DialogTitle>
          {book.subtitle && (
            <p className="text-lg text-muted-foreground">{book.subtitle}</p>
          )}
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              {book.sampleUrl && (
                <Button variant="outline" className="w-full" asChild>
                  <a href={book.sampleUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Sample PDF
                  </a>
                </Button>
              )}
              {book.buyUrl && (
                <Button className="w-full" asChild>
                  <a href={book.buyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Purchase Book
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="prose-academic">
              <p className="text-lg">{book.description}</p>
              <p className="mt-4">{book.extendedDescription}</p>
            </div>

            <Separator />

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Publication Details</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong>Year:</strong> {book.year}</li>
                  {book.isbn && <li><strong>ISBN:</strong> {book.isbn}</li>}
                  {book.publisher && <li><strong>Publisher:</strong> {book.publisher}</li>}
                  {book.pages && <li><strong>Pages:</strong> {book.pages}</li>}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Topics</h4>
                <div className="flex flex-wrap gap-1">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookModal;