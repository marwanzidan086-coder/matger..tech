'use client';

import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "تمت الإضافة بنجاح!",
      description: `تمت إضافة "${product.name}" إلى عربة التسوق.`,
    });
  };

  return (
    <div className="flex gap-4">
      <Button onClick={handleAddToCart} size="lg" className="flex-grow bg-accent text-accent-foreground hover:bg-accent/90">
        <ShoppingCart className="ml-2 h-5 w-5" />
        <span>أضف إلى العربة</span>
      </Button>
    </div>
  );
}
