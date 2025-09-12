import { products } from '@/lib/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCart from './AddToCart';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
        <div className="mt-auto pt-6">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
