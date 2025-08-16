// Import generated book cover images
import bookModernMath from '@/assets/img/book-modern-math-education.jpg';
import bookComplexAnalysis from '@/assets/img/book-complex-analysis.jpg';
import bookStatistics from '@/assets/img/book-statistics-social-sciences.jpg';
import bookCalculus from '@/assets/img/book-calculus-theory.jpg';
import bookLinearAlgebra from '@/assets/img/book-linear-algebra.jpg';
import bookResearchMethods from '@/assets/img/book-research-methods.jpg';
import bookDigitalTools from '@/assets/img/book-digital-tools.jpg';
import bookAbstractAlgebra from '@/assets/img/book-abstract-algebra.jpg';

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  extendedDescription: string;
  coverImage: string;
  year: number;
  isbn?: string;
  publisher?: string;
  pages?: number;
  tags: string[];
  sampleUrl?: string;
  buyUrl?: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Modern Mathematics Education",
    subtitle: "A Contemporary Approach to Learning",
    description: "An innovative exploration of mathematical pedagogy that bridges traditional methods with contemporary digital tools.",
    extendedDescription: "This comprehensive guide examines the evolution of mathematics education in the 21st century. Drawing from decades of teaching experience and cutting-edge research, it presents practical strategies for engaging students through interactive learning, visual representation, and real-world applications. The book addresses common learning difficulties and provides evidence-based solutions for educators at all levels.",
    coverImage: bookModernMath,
    year: 2023,
    isbn: "978-0-123456-78-9",
    publisher: "Academic Press",
    pages: 342,
    tags: ["Mathematics", "Education", "Pedagogy", "Digital Learning"],
    sampleUrl: "#",
    buyUrl: "#",
    featured: true
  },
  {
    id: "2", 
    title: "The Art of Teaching Complex Analysis",
    description: "Making abstract mathematical concepts accessible through visual methods and intuitive explanations.",
    extendedDescription: "Complex analysis can be one of the most challenging subjects for mathematics students. This book transforms the abstract into the concrete through carefully crafted visualizations, step-by-step examples, and practical applications. Each chapter builds upon previous concepts while maintaining clarity and rigor, making it an ideal text for both students and instructors.",
    coverImage: bookComplexAnalysis,
    year: 2022,
    isbn: "978-0-987654-32-1",
    publisher: "Mathematical Society Press",
    pages: 428,
    tags: ["Mathematics", "Complex Analysis", "Visualization", "Advanced"],
    sampleUrl: "#",
    buyUrl: "#",
    featured: true
  },
  {
    id: "3",
    title: "Statistics for the Social Sciences",
    subtitle: "Data Analysis in the Modern World",
    description: "A practical guide to statistical methods with real-world applications in social science research.",
    extendedDescription: "This book bridges the gap between statistical theory and practical application in social science research. It covers essential statistical concepts, from basic descriptive statistics to advanced inferential methods, always with an eye toward real-world application. Case studies from psychology, sociology, and political science demonstrate how statistical analysis can reveal meaningful insights about human behavior and social phenomena.",
    coverImage: bookStatistics,
    year: 2021,
    isbn: "978-0-456789-12-3",
    publisher: "Research Publications",
    pages: 386,
    tags: ["Statistics", "Social Sciences", "Research Methods", "Data Analysis"],
    sampleUrl: "#",
    buyUrl: "#"
  },
  {
    id: "4",
    title: "Calculus: Theory and Applications",
    description: "A comprehensive introduction to calculus with emphasis on understanding and practical problem-solving.",
    extendedDescription: "This textbook presents calculus as a powerful tool for understanding change and motion in the world around us. Rather than focusing solely on computational techniques, it emphasizes conceptual understanding and the connections between different areas of mathematics. Rich examples from physics, engineering, and economics demonstrate the practical importance of calculus in various fields.",
    coverImage: bookCalculus,
    year: 2020,
    isbn: "978-0-234567-89-0",
    publisher: "University Press",
    pages: 654,
    tags: ["Mathematics", "Calculus", "Theory", "Applications"],
    sampleUrl: "#",
    buyUrl: "#"
  },
  {
    id: "5",
    title: "Research Methods in Mathematics Education",
    description: "A guide to conducting meaningful research in mathematical learning and teaching practices.",
    extendedDescription: "This comprehensive handbook provides researchers and practitioners with the tools needed to conduct rigorous studies in mathematics education. It covers both quantitative and qualitative research methodologies, with particular attention to the unique challenges of studying mathematical learning. The book includes detailed case studies and practical advice for designing, conducting, and reporting educational research.",
    coverImage: bookResearchMethods,
    year: 2019,
    isbn: "978-0-345678-90-1",
    publisher: "Education Research Institute",
    pages: 298,
    tags: ["Research Methods", "Education", "Mathematics", "Academic"],
    sampleUrl: "#",
    buyUrl: "#"
  },
  {
    id: "6",
    title: "Linear Algebra and Its Applications",
    description: "An accessible introduction to linear algebra with emphasis on computational methods and applications.",
    extendedDescription: "Linear algebra forms the foundation of many areas of mathematics and its applications. This text makes the subject accessible to students while maintaining mathematical rigor. It covers vector spaces, linear transformations, eigenvalues and eigenvectors, and their applications in computer graphics, data analysis, and engineering. Numerous examples and exercises reinforce key concepts.",
    coverImage: bookLinearAlgebra,
    year: 2018,
    isbn: "978-0-567890-12-3",
    publisher: "Technical Publications",
    pages: 512,
    tags: ["Mathematics", "Linear Algebra", "Applications", "Computational"],
    sampleUrl: "#",
    buyUrl: "#",
    featured: true
  },
  {
    id: "7",
    title: "Digital Tools in Mathematics Education",
    description: "Leveraging technology to enhance mathematical understanding and engagement in the classroom.",
    extendedDescription: "As digital technology becomes increasingly prevalent in education, mathematics teachers need guidance on how to effectively integrate these tools into their practice. This book provides practical strategies for using graphing calculators, computer algebra systems, interactive whiteboards, and online platforms to enhance student learning. It addresses both the opportunities and challenges of educational technology.",
    coverImage: bookDigitalTools,
    year: 2023,
    isbn: "978-0-678901-23-4",
    publisher: "EdTech Press",
    pages: 267,
    tags: ["Education", "Technology", "Mathematics", "Digital Learning"],
    sampleUrl: "#",
    buyUrl: "#"
  },
  {
    id: "8",
    title: "Abstract Algebra: A First Course",
    description: "An introduction to group theory, ring theory, and field theory with applications to cryptography.",
    extendedDescription: "Abstract algebra can seem daunting to students encountering it for the first time. This book provides a gentle but rigorous introduction to the fundamental structures of algebra: groups, rings, and fields. Throughout, connections are made to concrete applications, particularly in cryptography and coding theory, helping students understand why these abstract concepts are important and useful.",
    coverImage: bookAbstractAlgebra,
    year: 2021,
    isbn: "978-0-789012-34-5", 
    publisher: "Pure Mathematics Press",
    pages: 394,
    tags: ["Mathematics", "Abstract Algebra", "Group Theory", "Cryptography"],
    sampleUrl: "#",
    buyUrl: "#"
  }
];

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  books.forEach(book => {
    book.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getFeaturedBooks = (): Book[] => {
  return books.filter(book => book.featured).slice(0, 3);
};