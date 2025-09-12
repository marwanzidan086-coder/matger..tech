import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageHint = product.category.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
        <div className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-lg font-bold mb-2 h-14 line-clamp-2">{product.name}</CardTitle>
          <p className="text-muted-foreground text-sm mt-auto">{product.category}</p>
        </div>
        <CardFooter className="p-4 flex justify-between items-center">
          <p className="text-xl font-bold text-primary">{product.price.toLocaleString('ar-EG')} جنيه</p>
          <Button variant="outline" size="sm">
            عرض التفاصيل
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
