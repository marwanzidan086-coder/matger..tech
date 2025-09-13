
import { PartyPopper, Truck } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function PromotionBanner() {
  return (
    <Card className="mb-8 p-4 bg-primary/10 border-primary/20 shadow-lg shadow-primary/5">
      <div className="flex items-center justify-center gap-4 text-center">
        <PartyPopper className="h-8 w-8 text-primary hidden sm:block" />
        <div>
          <h3 className="font-bold text-lg text-primary">عرض خاص بمناسبة الافتتاح!</h3>
          <p className="text-foreground/90">
            الشحن مجاني على جميع المنتجات حتى 1 يناير 2026.
          </p>
        </div>
        <Truck className="h-8 w-8 text-primary hidden sm:block" />
      </div>
    </Card>
  );
}
