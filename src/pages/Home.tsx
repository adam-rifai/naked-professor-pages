import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookCard from '@/components/BookCard';
import { ArrowRight, BookOpen, GraduationCap, Award } from 'lucide-react';
import { getFeaturedBooks, Book } from '@/data/books';
import teacherPhoto from '@/assets/img/dr-sarah-johnson.jpg';

interface HomeProps {
  onPageChange: (page: string) => void;
  onBookSelect: (book: Book) => void;
}

const Home = ({ onPageChange, onBookSelect }: HomeProps) => {
  const featuredBooks = getFeaturedBooks();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Dr. Sarah Johnson
                </h1>
                <p className="text-xl md:text-2xl text-accent font-medium">
                  Mathematics Educator & Author
                </p>
                <p className="text-lg text-muted-foreground prose-academic max-w-2xl">
                  Passionate about making mathematics accessible and engaging for learners at all levels. 
                  Author of multiple acclaimed textbooks and educational resources that bridge theory with practice.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onPageChange('books')}
                  className="gradient-primary text-white hover:shadow-glow transition-smooth"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore My Books
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onPageChange('about')}
                  className="transition-smooth"
                >
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-primary p-1 shadow-lg">
                <img
                  src={teacherPhoto}
                  alt="Dr. Sarah Johnson"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">12+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Published Books</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Years Teaching</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Teaching Awards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of my most impactful works in mathematics education and pedagogy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onReadMore={onBookSelect}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onPageChange('books')}
              className="transition-smooth"
            >
              View All Books
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "Mathematics is not about numbers, equations, computations, or algorithms: 
            it is about understanding."
          </blockquote>
          <cite className="text-lg opacity-80">— William Paul Thurston</cite>
        </div>
      </section>
    </main>
  );
};

export default Home;