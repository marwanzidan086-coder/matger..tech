import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p className="mb-2">&copy; {new Date().getFullYear()} Matgar.tech. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="https://wa.me/201557219572" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                دعم واتساب: +201557219572
            </a>
        </div>
      </div>
    </footer>
  );
}
