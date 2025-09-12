'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, UserPlus } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
});

const GoogleIcon = () => <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.37 1.62-4.17 1.62-4.97 0-9-4.03-9-9s4.03-9 9-9c2.82 0 4.95 1.17 6.48 2.64l-2.2 2.2c-.72-.68-1.95-1.25-3.03-1.25-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8c3.54 0 4.96-2.48 5.16-3.84H12.48z" fill="currentColor"/></svg>;
const FacebookIcon = () => <svg role="img" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" fill="currentColor"/></svg>;
const AppleIcon = () => <svg role="img" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 6.32c-.02 0-.04 0-.06.02-.3-.02-.62-.02-.94-.02-1.92 0-3.83.98-4.95 2.5-2.22 3.03-1.42 7.63.85 10.03.92.98 2.05 1.64 3.32 1.64.3 0 .62 0 .93-.02.3.02.62.02.92.02 1.25 0 2.4-.64 3.32-1.62 1.52-1.6 2.02-3.43 2.02-5.15 0-2.33-.9-4.22-2.3-5.45-1.12-.98-2.6-1.5-4.1-1.52zm2.6 11.23c-.7.7-1.74 1.15-2.76 1.15-.3 0-.6-.02-.88-.04-.28.02-.58.04-.88.04-1.02 0-2.06-.45-2.76-1.15-1.32-1.28-1.9-3.26-1.5-5.27.78 1.4 2.22 2.28 3.86 2.28.3 0 .62 0 .92-.02.32.02.64.02.94.02 1.66 0 3.1-1.02 3.78-2.42-.5 2.1-1.28 4.08-2.62 5.43zM13.2 2.1c.9 0 1.84.45 2.42 1.24.58.78.8 1.8.52 2.74-.9-.02-1.84-.47-2.42-1.26-.58-.8-.8-1.8-.52-2.72z" fill="currentColor"/></svg>;


export default function SignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Handle signup logic here
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">إنشاء حساب جديد</CardTitle>
          <CardDescription>انضم إلينا واستمتع بتجربة تسوق فريدة</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الكامل</FormLabel>
                    <FormControl>
                      <Input placeholder="اسمك الكامل" {...field} />
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
                  <UserPlus className="ml-2 h-4 w-4" />
                )}
                <span>إنشاء الحساب</span>
              </Button>
            </form>
          </Form>
          <div className="relative my-6">
            <Separator />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-card text-muted-foreground text-sm">
              أو
            </div>
          </div>
          <div className="space-y-3">
             <Button variant="outline" className="w-full">
              <GoogleIcon />
              <span className="flex-grow">متابعة باستخدام جوجل</span>
            </Button>
            <Button variant="outline" className="w-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:text-white border-[#1877F2]">
              <FacebookIcon />
              <span className="flex-grow">متابعة باستخدام فيسبوك</span>
            </Button>
            <Button variant="outline" className="w-full bg-black text-white hover:bg-black/80 hover:text-white border-black">
              <AppleIcon />
              <span className="flex-grow">متابعة باستخدام آبل</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm text-muted-foreground">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-primary hover:underline">
              سجل الدخول
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
