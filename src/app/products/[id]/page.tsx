
import { products } from '@/lib/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuickCheckoutForm from './QuickCheckoutForm';
import type { Product } from '@/lib/types';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div>
        <Button asChild variant="outline" className="mb-8">
            <Link href="/shop">
                <ArrowLeft className="ml-2 h-4 w-4" />
                العودة إلى المتجر
            </Link>
        </Button>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
                <Carousel className="w-full">
                <CarouselContent>
                    {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-square w-full rounded-lg overflow-hidden border">
                        <Image
                            src={img}
                            alt={`${product.name} - صورة ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
                </Carousel>
            </div>
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
                <p className="text-muted-foreground mt-2">{product.category}</p>
                <p className="text-3xl font-bold text-primary my-4">{product.price.toLocaleString('ar-EG')} جنيه</p>
                <div className="prose prose-lg max-w-none text-foreground/80 mt-4 mb-6">
                <p>{product.description}</p>
                </div>
            </div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-primary">اطلب هذا المنتج الآن</CardTitle>
                </CardHeader>
                <CardContent>
                    <QuickCheckoutForm product={product} />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
