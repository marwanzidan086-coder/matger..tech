'use client';

import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const imageHint = product.category.toLowerCase().split(' ').slice(0, 2).join(' ');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة "${product.name}" إلى عربة التسوق بنجاح.`,
      variant: 'default',
    });
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement favorite functionality
    toast({
      title: "تمت الإضافة إلى المفضلة",
      description: `تمت إضافة "${product.name}" إلى المفضلة بنجاح.`,
    });
  };

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
        <CardContent className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-lg font-bold mb-2 h-14 line-clamp-2 text-foreground">
            <Link href={`/products/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-auto">{product.category}</p>
        </CardContent>
        <CardFooter className="p-4 flex flex-col items-start gap-3">
          <p className="text-xl font-bold text-primary">{product.price.toLocaleString('ar-EG')} جنيه</p>
          <div className="w-full flex gap-2">
            <Button onClick={handleAddToCart} size="sm" className="flex-grow bg-primary/90 hover:bg-primary">
              <ShoppingCart className="ml-2 h-4 w-4" />
              <span>إضافة للسلة</span>
            </Button>
            <Button onClick={handleAddToFavorites} variant="outline" size="icon" className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive border-destructive/20 text-destructive/80">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
