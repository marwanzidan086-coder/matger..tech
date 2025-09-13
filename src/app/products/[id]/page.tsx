
import { products } from '@/lib/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, BatteryCharging, Bluetooth, Mic, Palette, Feather, Smartphone, Tablet, Weight, PaintBucket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuickCheckoutForm from './QuickCheckoutForm';
import type { Product } from '@/lib/types';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const FeatureIcon = ({ feature }: { feature: string }) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('صوت')) return <Zap className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('بطارية') || lowerFeature.includes('شحن')) return <BatteryCharging className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('بلوتوث')) return <Bluetooth className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('مايك')) return <Mic className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('لون')) return <PaintBucket className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('خفيفة') || lowerFeature.includes('وزن')) return <Weight className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('موبايلات')) return <Smartphone className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('تابلت')) return <Tablet className="h-5 w-5 text-primary" />;
    return <Zap className="h-5 w-5 text-primary" />;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  const descriptionParts = product.description.split('*').map(s => s.trim().replace(/^1/g, '')).filter(part => part.trim() !== '');
  const mainDescription = descriptionParts.length > 0 ? descriptionParts.shift() : product.description;
  
  const featureLists: { title: string; items: string[] }[] = [];
  let currentList: { title: string; items: string[] } | null = null;

  descriptionParts.forEach(part => {
    const lines = part.split('\n').map(line => line.trim().replace(/•/g, '')).filter(line => line);
    if (lines.length > 0) {
      if (!lines[0].includes(':')) {
        if (currentList) {
          featureLists.push(currentList);
        }
        currentList = { title: lines.shift()!, items: lines };
      } else if (currentList) {
        currentList.items.push(...lines);
      }
    }
  });

  if (currentList) {
    featureLists.push(currentList);
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
                <Carousel dir="ltr" className="w-full">
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
                
                <div className="prose prose-invert prose-lg max-w-none text-foreground/90 mt-4 mb-6 space-y-6">
                    <p className="lead">{mainDescription}</p>
                    
                    {featureLists.map((list, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-xl text-primary mb-3">{list.title}</h3>
                            <ul className="space-y-3 list-none p-0">
                                {list.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 p-2 rounded-md bg-card/50">
                                        <div className='mt-1 flex-shrink-0'>
                                            <FeatureIcon feature={item} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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
