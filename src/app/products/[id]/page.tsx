
import { products } from '@/lib/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, BatteryCharging, Bluetooth, Mic, Palette, Feather, Smartphone, Tablet, Weight, PaintBucket, Truck, Box, Tag, ShieldCheck, Gamepad, Wifi, Film, Car, Kitchen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuickCheckoutForm from './QuickCheckoutForm';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

// هذه الدالة تقوم بتجهيز الصفحات مسبقًا عند بناء الموقع
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// هذه الدالة تختار أيقونة مناسبة لكل ميزة بناءً على الكلمات الرئيسية
const FeatureIcon = ({ feature }: { feature: string }) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('صوت') || lowerFeature.includes('bass')) return <Zap className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('بطارية') || lowerFeature.includes('شحن') || lowerFeature.includes('power')) return <BatteryCharging className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('بلوتوث') || lowerFeature.includes('wi-fi')) return <Bluetooth className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('مايك') || lowerFeature.includes('ميكروفون')) return <Mic className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('لون')) return <PaintBucket className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('خفيف') || lowerFeature.includes('وزن')) return <Weight className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('موبايل')) return <Smartphone className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('تابلت') || lowerFeature.includes('شاشة')) return <Tablet className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('آمن') || lowerFeature.includes('حماية')) return <ShieldCheck className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('لعب') || lowerFeature.includes('جيم')) return <Gamepad className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('تلفزيون') || lowerFeature.includes('فيلم')) return <Film className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('سيارة')) return <Car className="h-5 w-5 text-primary" />;
    if (lowerFeature.includes('مطبخ') || lowerFeature.includes('تقطيع')) return <Kitchen className="h-5 w-5 text-primary" />;
    return <Tag className="h-5 w-5 text-primary" />;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  // تقسيم الوصف إلى أجزاء بناءً على علامة (*)
  const descriptionParts = product.description.split('*').map(s => s.trim()).filter(part => part.trim() !== '');
  const mainDescription = descriptionParts.length > 0 ? descriptionParts.shift() : product.description;
  
  const featureLists: { title: string; items: string[] }[] = [];
  let currentList: { title: string; items: string[] } | null = null;

  // تنظيم المميزات والتفاصيل في قوائم
  descriptionParts.forEach(part => {
    const lines = part.split('\n').map(line => line.trim().replace(/^[•-]/g, '').trim()).filter(line => line);
    if (lines.length > 0) {
        const potentialTitle = lines[0].replace(/:/g, '').trim();
        const isTitle = ["مميزات المنتج", "تفاصيل سريعة"].includes(potentialTitle);
        
        if(isTitle) {
            if (currentList) {
                featureLists.push(currentList);
            }
            currentList = { title: potentialTitle, items: lines.slice(1) };
        } else {
            if (!currentList) {
                currentList = { title: "المميزات", items: [] };
            }
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
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
                <p className="text-3xl font-bold text-primary my-4">{product.price.toLocaleString('ar-EG')} جنيه</p>
                
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 py-2 px-4 rounded-lg w-fit text-base mb-6">
                  <Truck className="ml-2 h-5 w-5" />
                  <span className="font-semibold">عرض الافتتاح: الشحن مجاني!</span>
                </Badge>

                <div className="prose prose-invert prose-lg max-w-none text-foreground/90 space-y-6">
                    <p className="lead">{mainDescription}</p>
                    
                    {featureLists.map((list, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-xl text-primary mb-3">{list.title}</h3>
                            <ul className="space-y-3 list-none p-0">
                                {list.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 p-3 rounded-md bg-card/50 border border-border">
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
        <div className="mt-16 pt-12 border-t border-primary/20">
             <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-primary flex items-center justify-center gap-2">
                        <Box className="h-8 w-8"/>
                        <span>اطلب هذا المنتج الآن</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-center text-muted-foreground mb-6'>املأ بياناتك وسيتم تجهيز طلبك فورًا لإرساله عبر واتساب.</p>
                    <QuickCheckoutForm product={product} />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
