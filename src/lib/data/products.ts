import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(p => p.id === id)?.imageUrl || '';

export const products: Product[] = [
  {
    id: 1,
    name: "هاتف ذكي X-Pro",
    description: "وصف جديد ومحدث لهاتف X-Pro. هاتف رائع بمواصفات قوية وتصميم فريد.",
    price: 9500,
    images: [getImageUrl('product-1'), `https://picsum.photos/seed/111/600/600`, `https://picsum.photos/seed/112/600/600`],
    category: "هواتف ذكية",
  },
  {
    id: 2,
    name: "لابتوب UltraBook 14",
    description: "وصف جديد للابتوب. جهاز نحيف وخفيف ومثالي للمطورين والمصممين.",
    price: 25000,
    images: [getImageUrl('product-2'), `https://picsum.photos/seed/221/600/600`, `https://picsum.photos/seed/222/600/600`],
    category: "أجهزة لابتوب",
  },
  {
    id: 3,
    name: "سماعات رأس لاسلكية",
    description: "استمتع بصوت نقي وعزل تام للضوضاء مع هذه السماعات المذهلة. بطارية تدوم لساعات!",
    price: 3200,
    images: [getImageUrl('product-3'), `https://picsum.photos/seed/331/600/600`, `https://picsum.photos/seed/332/600/600`],
    category: "إكسسوارات صوتية",
  },
  {
    id: 4,
    name: "ساعة ذكية Fit-Watch 5",
    description: "تتبع لياقتك البدنية وصحتك بدقة. مقاومة للماء، شاشة ساطعة، وتدعم GPS ومراقبة نبضات القلب على مدار الساعة.",
    price: 4500,
    images: [getImageUrl('product-4'), `https://picsum.photos/seed/41/600/600`, `https://picsum.photos/seed/42/600/600`],
    category: "أجهزة قابلة للارتداء",
  },
  {
    id: 5,
    name: "شاحن لاسلكي سريع",
    description: "شحن سريع وآمن لأجهزتك المتوافقة مع تقنية Qi. تصميم أنيق ومضغوط يناسب أي مكتب أو طاولة.",
    price: 800,
    images: [getImageUrl('product-5'), `https://picsum.photos/seed/51/600/600`, `https://picsum.photos/seed/52/600/600`],
    category: "إكسسوارات",
  },
  {
    id: 6,
    name: "مكبر صوت بلوتوث",
    description: "صوت قوي ونقي في جهاز محمول. مقاوم للرذاذ ومثالي للرحلات والحفلات الصغيرة.",
    price: 1500,
    images: [getImageUrl('product-6'), `https://picsum.photos/seed/61/600/600`, `https://picsum.photos/seed/62/600/600`],
    category: "إكسسوارات صوتية",
  },
  {
    id: 7,
    name: "باور بانك 20000mAh",
    description: "لا تقلق بشأن نفاد البطارية مرة أخرى. سعة ضخمة تكفي لشحن هاتفك عدة مرات، مع منافذ متعددة.",
    price: 1100,
    images: [getImageUrl('product-7'), `https://picsum.photos/seed/71/600/600`, `https://picsum.photos/seed/72/600/600`],
    category: "إكسسوارات",
  },
  {
    id: 8,
    name: "ماوس ألعاب Pro-Gamer",
    description: "دقة عالية واستجابة فائقة للاعبين المحترفين. تصميم مريح وإضاءة RGB قابلة للتخصيص.",
    price: 1300,
    images: [getImageUrl('product-8'), `https://picsum.photos/seed/81/600/600`, `https://picsum.photos/seed/82/600/600`],
    category: "إكسسوارات ألعاب",
  },
  {
    id: 9,
    name: "كيبورد ميكانيكي",
    description: "استمتع بتجربة كتابة ولعب لا مثيل لها مع مفاتيح ميكانيكية متينة وإضاءة خلفية كاملة.",
    price: 2200,
    images: [getImageUrl('product-9'), `https://picsum.photos/seed/91/600/600`, `https://picsum.photos/seed/92/600/600`],
    category: "إكسسوارات ألعاب",
  },
  {
    id: 10,
    name: "كاميرا ويب 4K",
    description: "جودة فيديو فائقة الوضوح لمكالمات الفيديو والبث المباشر. تركيز تلقائي وميكروفون مدمج عالي الجودة.",
    price: 1800,
    images: [getImageUrl('product-10'), `https://picsum.photos/seed/101/600/600`, `https://picsum.photos/seed/102/600/600`],
    category: "إكسسوارات كمبيوتر",
  },
];
