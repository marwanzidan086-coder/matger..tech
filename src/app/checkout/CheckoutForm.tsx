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
  phone: z.string().min(10, { message: "رقم الهاتف غير صالح" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }).optional().or(z.literal('')),
  address: z.string().min(10, { message: "يرجى إدخال عنوان مفصل" }),
});

export default function CheckoutForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
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
📱 *رقم الهاتف:* ${values.phone}
${values.email ? `📧 *البريد الإلكتروني:* ${values.email}` : ''}
📍 *العنوان:* ${values.address}
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
    });
    
    window.location.href = whatsappUrl;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم الهاتف</FormLabel>
              <FormControl>
                <Input placeholder="مثال: 01012345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني (اختياري)</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>العنوان بالتفصيل</FormLabel>
              <FormControl>
                <Input placeholder="المدينة، الشارع، رقم المبنى، رقم الشقة" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting || cartItems.length === 0}>
          {isSubmitting ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            "إرسال الطلب عبر واتساب"
          )}
        </Button>
      </form>
    </Form>
  );
}
