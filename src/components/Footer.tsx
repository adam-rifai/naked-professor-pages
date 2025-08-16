const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Dr. Sarah Johnson. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Built for showcasing academic excellence in mathematics education.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;