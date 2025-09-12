import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  // Dummy user data - replace with actual user data from your auth provider
  const user = {
    name: "مستخدم جديد",
    email: "user@example.com",
  };
  const isAuthenticated = false; // Replace with actual auth state

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Card className="w-full max-w-md p-8">
            <CardTitle className="text-2xl font-bold mb-4">يجب تسجيل الدخول</CardTitle>
            <CardDescription className="mb-6">
            يرجى تسجيل الدخول أو إنشاء حساب جديد لعرض ملفك الشخصي.
            </CardDescription>
            <div className="flex justify-center gap-4">
                <Button asChild>
                    <Link href="/login">تسجيل الدخول</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/signup">إنشاء حساب</Link>
                </Button>
            </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-headline">الملف الشخصي</h1>
      <Card>
        <CardHeader>
          <CardTitle>مرحبًا، {user.name}!</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">طلباتي</h3>
            <p className="text-muted-foreground">لا توجد طلبات سابقة.</p>
          </div>
          <Button variant="destructive">
            <LogOut className="ml-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
