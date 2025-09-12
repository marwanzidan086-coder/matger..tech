import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageHint = product.category.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 bg-card/50">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full group">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
        <div className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-lg font-bold mb-2 h-14 line-clamp-2 text-foreground">{product.name}</CardTitle>
          <p className="text-muted-foreground text-sm mt-auto">{product.category}</p>
        </div>
        <CardFooter className="p-4 flex justify-between items-center">
          <p className="text-xl font-bold text-primary">{product.price.toLocaleString('ar-EG')} جنيه</p>
          <Button variant="ghost" size="sm" className="text-primary group-hover:text-accent-foreground group-hover:bg-primary">
            <span className='group-hover:hidden'>التفاصيل</span>
            <ArrowLeft className="hidden group-hover:block h-5 w-5" />
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
