'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  phone1: z.string().min(10, { message: "رقم الهاتف الأول غير صالح" }),
  phone2: z.string().optional().or(z.literal('')),
  governorate: z.string().min(3, { message: "يرجى إدخال اسم المحافظة" }),
  city: z.string().min(3, { message: "يرجى إدخال اسم المدينة" }),
  village: z.string().optional().or(z.literal('')),
  street: z.string().min(5, { message: "يرجى إدخال اسم الشارع" }),
});

export default function CheckoutForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone1: "",
      phone2: "",
      governorate: "",
      city: "",
      village: "",
      street: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const whatsappNumber = "201557219572";
    
    const productDetails = cartItems.map(item => 
      `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${(item.price * item.quantity).toLocaleString('ar-EG')} جنيه`
    ).join('\n');

    const message = `
طلب جديد من متجر Matgar.tech 🛍️
-----------------------------------
👤 *الاسم:* ${values.name}
📱 *رقم الهاتف (1):* ${values.phone1}
${values.phone2 ? `📱 *رقم الهاتف (2):* ${values.phone2}` : ''}
📍 *العنوان:*
- المحافظة: ${values.governorate}
- المدينة: ${values.city}
${values.village ? `- القرية: ${values.village}`: ''}
- الشارع: ${values.street}
-----------------------------------
🛒 *الطلبات:*
${productDetails}
-----------------------------------
💰 *المبلغ الإجمالي:* ${totalPrice.toLocaleString('ar-EG')} جنيه
`.trim().replace(/^\s+/gm, '');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    clearCart();
    
    toast({
      title: "تم إرسال طلبك!",
      description: "سيتم توجيهك إلى واتساب لإرسال الطلب.",
      variant: 'default',
    });
    
    window.location.href = whatsappUrl;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم الثلاثي</FormLabel>
              <FormControl>
                <Input placeholder="مثال: أحمد محمد علي" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهاتف الأساسي</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: 01012345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم هاتف إضافي (اختياري)</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: 01112345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="governorate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المحافظة</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: القاهرة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المدينة / المركز</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: مدينة نصر" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
         <FormField
            control={form.control}
            name="village"
            render={({ field }) => (
              <FormItem>
                <FormLabel>القرية / المنطقة (اختياري)</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: الحى السابع" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الشارع ورقم المبنى/الشقة</FormLabel>
              <FormControl>
                <Input placeholder="مثال: شارع عباس العقاد، مبنى 5، شقة 10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || cartItems.length === 0}>
          {isSubmitting ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            "إرسال الطلب عبر واتساب"
          )}
        </Button>
      </form>
    </Form>
  </change>
  <change>
    <file>/src/app/login/page.tsx</file>
    <content><![CDATA['use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">تسجيل الدخول</CardTitle>
          <CardDescription>أدخل بياناتك للوصول إلى حسابك</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                ) : (
                  <LogIn className="ml-2 h-4 w-4" />
                )}
                <span>تسجيل الدخول</span>
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm text-muted-foreground">
            ليس لديك حساب؟{" "}
            <Link href="/signup" className="text-primary hover:underline">
              أنشئ حسابًا جديدًا
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
