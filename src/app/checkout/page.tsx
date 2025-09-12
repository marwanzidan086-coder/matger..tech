import CheckoutForm from './CheckoutForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CheckoutSummary from './CheckoutSummary';

export default function CheckoutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 font-headline text-center">إتمام الطلب</h1>
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>بيانات الشحن</CardTitle>
          </CardHeader>
          <CardContent>
            <CheckoutForm />
          </CardContent>
        </Card>
        <Card className="h-fit sticky top-24">
          <CardHeader>
            <CardTitle>ملخص طلبك</CardTitle>
          </CardHeader>
          <CardContent>
            <CheckoutSummary />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
