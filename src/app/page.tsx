
import { products } from '@/lib/data/products';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary animate-pulse">مستقبل التسوق بين يديك</h1>
        <p className="text-lg text-muted-foreground mt-4">أحدث المنتجات الإلكترونية بتصميم من عالم آخر.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
