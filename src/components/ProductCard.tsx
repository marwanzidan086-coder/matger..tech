
import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const imageHint = product.category.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 bg-card/50 group">
      <Link href={`/products/${product.id}`}>
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
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-lg font-bold mb-2 h-14 line-clamp-2 text-foreground">
          <Link href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm mt-auto">{product.category}</p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <p className="text-xl font-bold text-primary">{product.price.toLocaleString('ar-EG')} جنيه</p>
        <Link href={`/products/${product.id}`} className="text-sm text-muted-foreground hover:text-primary">
          عرض التفاصيل
        </Link>
      </CardFooter>
    </Card>
  );
}
