
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Home, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/config';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-md shadow-primary/10 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Image 
            src="https://i.ibb.co/GKmyTST/Whats-App-Image-2025-09-13-at-11-57-30-e3e74d1c.jpg" 
            alt={`${siteConfig.storeName} Logo`}
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <span className="font-headline">{siteConfig.storeName}</span>
        </Link>
        <nav className='flex items-center gap-2'>
           <Link href="/shop">
            <Button variant="ghost" size="icon">
              <Home className="h-6 w-6" />
              <span className="sr-only">المتجر</span>
            </Button>
          </Link>
           <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
              <span className="sr-only">المفضلة</span>
            </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center text-xs"
                >
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">عربة التسوق</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
