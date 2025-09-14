import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import { siteConfig } from '@/lib/config';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: `${siteConfig.storeName} | توصيل مجاني لأول طلب`,
  description: 'متجر إلكتروني حديث ومتكامل لبيع المنتجات الإلكترونية والإكسسوارات',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`dark ${tajawal.variable}`}>
      <body className="font-body antialiased">
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
            <FloatingWhatsAppButton />
            <Toaster />
          </CartProvider>
      </body>
    </html>
  );
}
