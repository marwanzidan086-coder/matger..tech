'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, CartItem as CartItemType } from '@/context/CartContext';
import { Card } from '@/components/ui/card';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Card className="flex items-center p-4 gap-4">
      <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/products/${item.id}`} className="font-bold hover:underline">
          {item.name}
        </Link>
        <p className="text-muted-foreground text-sm">
          {item.price.toLocaleString('ar-EG')} جنيه
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            <Minus className="h-4 w-4" />
          </Button>
          <Input 
            type="number" 
            className="w-16 h-8 text-center" 
            value={item.quantity}
            readOnly
          />
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="font-bold text-lg">
          {(item.price * item.quantity).toLocaleString('ar-EG')} جنيه
        </p>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">إزالة المنتج</span>
        </Button>
      </div>
    </Card>
  );
}
