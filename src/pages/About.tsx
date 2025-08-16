import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, Award, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import teacherPhoto from '@/assets/img/dr-sarah-johnson.jpg';

const About = () => {
  const education = [
    {
      degree: "Ph.D. in Mathematics Education",
      institution: "Stanford University",
      year: "2008",
      description: "Dissertation: 'Visual Learning Methods in Advanced Calculus'"
    },
    {
      degree: "M.S. in Mathematics",
      institution: "MIT",
      year: "2004",
      description: "Specialization in Applied Mathematics and Statistics"
    },
    {
      degree: "B.S. in Mathematics",
      institution: "Harvard University",
      year: "2002",
      description: "Summa Cum Laude, Phi Beta Kappa"
    }
  ];

  const experience = [
    {
      position: "Professor of Mathematics",
      institution: "University of California, Berkeley",
      period: "2015 - Present",
      description: "Lead researcher in mathematics education, published author of 8 textbooks"
    },
    {
      position: "Associate Professor",
      institution: "University of Michigan",
      period: "2010 - 2015",
      description: "Developed innovative curriculum for undergraduate mathematics courses"
    },
    {
      position: "Assistant Professor",
      institution: "Northwestern University",
      period: "2008 - 2010",
      description: "Established research program in mathematical pedagogy"
    }
  ];

  const awards = [
    "Outstanding Teacher Award, UC Berkeley (2020, 2018, 2016)",
    "National Science Foundation CAREER Award (2012)",
    "Excellence in Mathematics Education Award, MAA (2014)",
    "Best Textbook Award, Mathematical Association of America (2019)",
    "Distinguished Research Award in Education (2021)"
  ];

  return (
    <main className="flex-1 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Dr. Sarah Johnson</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to transforming mathematics education through innovative teaching methods and accessible learning resources.
          </p>
        </div>

        {/* Photo and Bio */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={teacherPhoto}
                alt="Dr. Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4">
              <Button className="w-full gradient-primary text-white">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="prose-academic">
              <p className="text-lg leading-relaxed">
                Dr. Sarah Johnson is a distinguished Professor of Mathematics at the University of California, Berkeley, 
                where she has been revolutionizing mathematics education for over a decade. Her passion lies in making 
                abstract mathematical concepts accessible and engaging for students at all levels.
              </p>
              
              <p>
                With a Ph.D. in Mathematics Education from Stanford University and over 15 years of teaching experience, 
                Dr. Johnson has authored numerous acclaimed textbooks that bridge the gap between theoretical mathematics 
                and practical application. Her innovative teaching methods have earned her multiple teaching awards and 
                recognition from her peers.
              </p>

              <p>
                Dr. Johnson's research focuses on visual learning methods, digital tools in mathematics education, and 
                developing inclusive curricula that serve diverse learning styles. She has published over 50 peer-reviewed 
                articles and has been invited to speak at international conferences on mathematics education.
              </p>

              <p>
                Beyond her academic work, Dr. Johnson is passionate about promoting STEM education, particularly encouraging 
                underrepresented groups to pursue careers in mathematics and science. She serves on several editorial boards 
                and is actively involved in curriculum development at the national level.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-accent font-medium">{edu.institution} • {edu.year}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>
          
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{exp.position}</CardTitle>
                  <p className="text-accent font-medium">{exp.institution} • {exp.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-foreground">Awards & Recognition</h2>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground">{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Expertise Areas */}
        <section>
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-foreground">Areas of Expertise</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mathematics Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curriculum development and assessment</li>
                  <li>• Visual learning methodologies</li>
                  <li>• Inclusive teaching practices</li>
                  <li>• Educational technology integration</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Mathematical Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Calculus and Advanced Analysis</li>
                  <li>• Linear Algebra and Abstract Algebra</li>
                  <li>• Statistics and Data Analysis</li>
                  <li>• Mathematical Modeling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;