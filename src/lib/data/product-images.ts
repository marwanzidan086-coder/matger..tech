
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
      "https://i.ibb.co/L5hKzBr/image.png",
      "https://i.ibb.co/k2q2wW7/image.png",
      "https://i.ibb.co/ZJ2v9vM/image.png",
      "https://i.ibb.co/hR01fht/image.png"
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
        "https://i.ibb.co/gFySDx91/image-1.png",
        "https://i.ibb.co/Vp5VwDZd/image-2.png",
        "https://i.ibb.co/0RNwW5rt/image-3.png"
    ],
  },
  {
    id: 5,
    images: [
      "https://i.ibb.co/Q7w5Z7rf/image-1.jpg",
      "https://i.ibb.co/pB8Gjs7B/image-2.jpg",
      "https://i.ibb.co/rf6HXm8y/image-3.jpg",
      "https://i.ibb.co/84tngKry/image-4.jpg",
      "https://i.ibb.co/zHZy01Mp/image-5.jpg",
      "https://i.ibb.co/35DMYkFN/image-6.jpg",
      "https://i.ibb.co/0VqtqGzY/image-7.jpg"
    ],
  },
  {
    id: 6,
    images: [
      "https://i.ibb.co/k3t79S0/image.png",
      "https://i.ibb.co/FWSy10R/image.png",
      "https://i.ibb.co/3sH32sB/image.png",
      "https://i.ibb.co/Vp8p3jF/image.png",
      "https://i.ibb.co/wJvBGLp/image.png"
    ],
  },
  {
    id: 7,
    images: [
      "https://i.ibb.co/7xTBRHBc/image-1.jpg",
      "https://i.ibb.co/JWTzmtLL/image-2.jpg",
      "https://i.ibb.co/3yH3dR65/image-3.jpg",
      "https://i.ibb.co/spm3LtJb/image-4.png"
    ],
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
    images: [
        "https://i.ibb.co/p6FtWdGK/image-1.jpg",
        "https://i.ibb.co/35W5djgp/image-2.jpg",
        "https://i.ibb.co/vC0zRWBW/image-3.jpg",
        "https://i.ibb.co/svz27bBN/image-4.jpg"
    ],
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
