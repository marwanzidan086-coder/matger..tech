'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
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

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-headline">الملف الشخصي</h1>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>مرحبًا، {user.displayName || "مستخدم"}!</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">طلباتي</h3>
            <p className="text-muted-foreground">لا توجد طلبات سابقة.</p>
          </div>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="ml-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
