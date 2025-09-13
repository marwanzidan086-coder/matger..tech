import { Phone } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <div className='flex justify-center items-center gap-2 mb-4'>
            <Image 
              src="https://i.ibb.co/GKmyTST/Whats-App-Image-2025-09-13-at-11-57-30-e3e74d1c.jpg" 
              alt={`${siteConfig.storeName} Logo`}
              width={24} 
              height={24} 
              className="rounded-md"
            />
            <p className="font-bold text-lg text-foreground">{siteConfig.storeName}</p>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} {siteConfig.storeName}. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                دعم واتساب: +{siteConfig.whatsappNumber}
            </a>
        </div>
      </div>
    </footer>
  );
}
