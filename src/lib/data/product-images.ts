
/**
 * هذا الملف مخصص لإدارة صور المنتجات فقط.
 * لتغيير صور أي منتج، ابحث عن الـ "id" الخاص به وقم بتعديل روابط الصور في القائمة.
 * 
 * ملاحظة: الصورة الأولى في القائمة هي التي ستظهر كصورة رئيسية للمنتج في المتجر.
 */

interface ProductImageData {
  id: number;
  images: string[];
}

export const productImages: ProductImageData[] = [
  {
    id: 1,
    images: [
      "https://i.ibb.co/v6YJz9t/N-1.jpg",
      "https://i.ibb.co/SDYLDd9/9.jpg",
      "https://i.ibb.co/fYgRnvN/R-1.jpg",
      "https://i.ibb.co/jZ34JYt/Q-1.jpg",
      "https://i.ibb.co/d0NjmfB/f-1.jpg"
    ],
  },
  {
    id: 2,
    images: ["https://picsum.photos/seed/2/600/600", `https://picsum.photos/seed/221/600/600`, `https://picsum.photos/seed/222/600/600`],
  },
  {
    id: 3,
    images: ["https://picsum.photos/seed/3/600/600", `https://picsum.photos/seed/331/600/600`, `https://picsum.photos
/seed/332/600/600`],
  },
  {
    id: 4,
    images: ["https://picsum.photos/seed/4/600/600", `https://picsum.photos/seed/41/600/600`, `https://picsum.photos/seed/42/600/600`],
  },
  {
    id: 5,
    images: ["https://picsum.photos/seed/5/600/600", `https://picsum.photos/seed/51/600/600`, `https://picsum.photos/seed/52/600/600`],
  },
  {
    id: 6,
    images: ["https://picsum.photos/seed/6/600/600", `https://picsum.photos/seed/61/600/600`, `https://picsum.photos/seed/62/600/600`],
  },
  {
    id: 7,
    images: ["https://picsum.photos/seed/7/600/600", `https://picsum.photos/seed/71/600/600`, `https://picsum.photos/seed/72/600/600`],
  },
  {
    id: 8,
    images: ["https://picsum.photos/seed/8/600/600", `https://picsum.photos/seed/81/600/600`, `https://picsum.photos/seed/82/600/600`],
  },
  {
    id: 9,
    images: ["https://picsum.photos/seed/9/600/600", `https://picsum.photos/seed/91/600/600`, `https://picsum.photos/seed/92/600/600`],
  },
  {
    id: 10,
    images: ["https://picsum.photos/seed/10/600/600", `https://picsum.photos/seed/101/600/600`, `https://picsum.photos/seed/102/600/600`],
  },
];
