
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
      "https://i.ibb.co/d0NjmfB/f-1.jpg",
    ],
  },
  {
    id: 2,
    images: ["https://i.ibb.co/BVCkd46d/image-3.png", `https://i.ibb.co/3YCMfzT0/image-1.png`, `https://i.ibb.co/4gPz6vcw/image-2.jpg`, `https://i.ibb.co/9kSnv8yT/image-4.jpg`],
  },
  {
    id: 3,
    images: [
      "https://i.ibb.co/gb51bYgp/image-1.jpg",
      "https://i.ibb.co/DDfMBp6c/image-2.jpg",
      "https://i.ibb.co/QvN3SGNs/image-3.jpg",
      "https://i.ibb.co/d4sTzG4D/image-4.jpg",
      "https://i.ibb.co/zT4kS2Pw/image-5.jpg",
      "https://i.ibb.co/kgkPC2xy/image-6.jpg",
      "https://i.ibb.co/Z1YVNpJb/image-7.jpg",
      "https://i.ibb.co/prGjRdyW/image-8.jpg",
      "https://i.ibb.co/q3v7wbpx/image-9.jpg",
      "https://i.ibb.co/jPYkMQwR/image-10.jpg",
      "https://i.ibb.co/cKVHxW3h/image-11.jpg"
    ],
  },
  {
    id: 4,
    images: [
        "https://i.ibb.co/bjCRBc5n/image-4.png",
        "https://i.ibb.co/Vp5VwDZd/image-2.png",
        "https://i.ibb.co/0RNwW5rt/image-3.png",
        "https://i.ibb.co/gFySDx91/image-1.png"
    ],
  },
  {
    id: 5,
    images: ["https://i.ibb.co/67Xmd1v0/image-5.jpg", `https://picsum.photos/seed/51/600/600`, `https://picsum.photos/seed/52/600/600`],
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
    images: [
      "https://i.ibb.co/jP95Sxh6/image-1.jpg",
      "https://i.ibb.co/WWmybCkC/image-2.jpg",
      "https://i.ibb.co/QjK7LRJs/image-3.jpg",
      "https://i.ibb.co/4ndkKtjt/image-4.jpg",
      "https://i.ibb.co/sd2GJ97k/image-5.jpg",
      "https://i.ibb.co/4ycxrSY/image-6.jpg",
      "https://i.ibb.co/C3DpC01s/image-7.png"
    ],
  },
  {
    id: 9,
    images: ["https://picsum.photos/seed/9/600/600", `https://picsum.photos/seed/91/600/600`, `https://picsum.photos/seed/92/600/600`],
  },
  {
    id: 10,
    images: [
      "https://i.ibb.co/GvCpy6Gh/image-1.png",
      "https://i.ibb.co/bjyr0dP1/image-2.jpg",
      "https://i.ibb.co/8Dxcmwwr/image-3.jpg",
      "https://i.ibb.co/Pv6Y72Df/image-4.jpg",
      "https://i.ibb.co/6qC36d8/image-5.jpg",
      "https://i.ibb.co/CKsCVW5S/image-6.jpg"
    ],
  },
];
