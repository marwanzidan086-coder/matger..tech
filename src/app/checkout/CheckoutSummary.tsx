'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function CheckoutSummary() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="space-y-4">
      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0 border">
              <Image src={item.images[0]} alt={item.name} fill className="object-cover" sizes="64px"/>
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {item.quantity}
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-medium text-sm">{item.name}</p>
            </div>
            <p className="font-semibold text-sm">
              {(item.price * item.quantity).toLocaleString('ar-EG')} ج.م
            </p>
          </div>
        ))}
      </div>
      <Separator />
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>المجموع الفرعي</span>
          <span>{totalPrice.toLocaleString('ar-EG')} ج.م</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>الشحن</span>
          <span>مجاني</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold text-lg">
          <span>الإجمالي</span>
          <span>{totalPrice.toLocaleString('ar-EG')} ج.م</span>
        </div>
      </div>
    </div>
  );
}
