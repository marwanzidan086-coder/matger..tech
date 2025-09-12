import { Phone, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <div className='flex justify-center items-center gap-2 mb-4'>
            <Zap className="h-6 w-6 text-primary" />
            <p className="font-bold text-lg text-foreground">Matgar.tech</p>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} Matgar.tech. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="https://wa.me/201557219572" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                دعم واتساب: +201557219572
            </a>
        </div>
      </div>
    </footer>
  );
}
