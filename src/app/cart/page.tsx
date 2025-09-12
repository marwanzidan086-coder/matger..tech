
'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CartItem from './CartItem';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, totalPrice, cartCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 text-2xl font-bold">عربة التسوق فارغة</h1>
        <p className="mt-2 text-muted-foreground">لم تقم بإضافة أي منتجات بعد.</p>
        <Button asChild className="mt-6">
          <Link href="/shop">تصفح المنتجات</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6 font-headline">عربة التسوق ({cartCount} منتجات)</h1>
        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>ملخص الطلب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>المجموع الفرعي</span>
              <span>{totalPrice.toLocaleString('ar-EG')} جنيه</span>
            </div>
            <div className="flex justify-between">
              <span>الشحن</span>
              <span className="text-green-600">مجاني</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>الإجمالي</span>
              <span>{totalPrice.toLocaleString('ar-EG')} جنيه</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/checkout">إتمام الطلب</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
