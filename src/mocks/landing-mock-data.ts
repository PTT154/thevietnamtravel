import { ITourCategoryResponse } from "@/interfaces/tour-category-interface";
import type { CarouselSlide } from "../components/primitives/landing-carousel/landing-carousel";

export const MOCK_SLIDES: CarouselSlide[] = [
  {
    titleMain: "Welcome to",
    titleHighlight: "The Vietnam Travel",
    subTitle: "Your specialized travel brand in Vietnam",
    imageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1920&q=80",
    href: "/about",
  },
  {
    titleMain: "Explore the beauty of",
    titleHighlight: "Ha Long Bay",
    subTitle: "Experience a world natural wonder in the heart of Vietnam",
    imageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
    href: "/tours/ha-long-bay",
  },
  {
    titleMain: "Discover the timeless",
    titleHighlight: "Hoi An Ancient Town",
    subTitle:
      "Where narrow streets glow with thousands of lanterns every night",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1932&auto=format&fit=crop",
    href: "/tours/hoi-an",
  },
  {
    titleMain: "Breathtaking",
    titleHighlight: "Ha Long Bay",
    subTitle: "Explore the majestic beauty of thousands of limestone islands",
    imageUrl:
      "https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=1486&auto=format&fit=crop",
    href: "/tours/ha-long",
  },
  {
    titleMain: "Ethereal beauty in",
    titleHighlight: "Trang An - Ninh Binh",
    subTitle: "A serene journey along the waterways of the World Heritage site",
    imageUrl:
      "https://images.unsplash.com/photo-1711367798865-ba7d9b534758?q=80&w=1170&auto=format&fit=crop",
    href: "/tours/ninh-binh",
  },
];

export const MOCK_TOUR_CATEGORIES: Pick<
  ITourCategoryResponse,
  "id" | "title" | "endpoint" | "mainImageUrl"
>[] = [
  {
    id: "1",
    title: "Biking tours",
    endpoint: "biking-tours",
    mainImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "2",
    title: "Biking tours",
    endpoint: "biking-tours-2",
    mainImageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "3",
    title: "Biking tours",
    endpoint: "biking-tours-3",
    mainImageUrl:
      "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Biking tours",
    endpoint: "biking-tours-4",
    mainImageUrl:
      "https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=1486&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Biking tours",
    endpoint: "biking-tours-5",
    mainImageUrl:
      "https://images.unsplash.com/photo-1711367798865-ba7d9b534758?q=80&w=1170&auto=format&fit=crop",
  },
  // Các phần còn lại giữ nguyên hoặc lặp lại các ảnh trên nếu cần
  {
    id: "6",
    title: "Biking tours",
    endpoint: "biking-tours-6",
    mainImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "7",
    title: "Biking tours",
    endpoint: "biking-tours-7",
    mainImageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "8",
    title: "Biking tours",
    endpoint: "biking-tours-8",
    mainImageUrl:
      "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Biking tours",
    endpoint: "biking-tours-9",
    mainImageUrl:
      "https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=1486&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Biking tours",
    endpoint: "biking-tours-10",
    mainImageUrl:
      "https://images.unsplash.com/photo-1711367798865-ba7d9b534758?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Biking tours",
    endpoint: "biking-tours-11",
    mainImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "12",
    title: "Biking tours",
    endpoint: "biking-tours-12",
    mainImageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "13",
    title: "Biking tours",
    endpoint: "biking-tours-13",
    mainImageUrl:
      "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: "14",
    title: "Biking tours",
    endpoint: "biking-tours-14",
    mainImageUrl:
      "https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=1486&auto=format&fit=crop",
  },
  {
    id: "15",
    title: "Biking tours",
    endpoint: "biking-tours-15",
    mainImageUrl:
      "https://images.unsplash.com/photo-1711367798865-ba7d9b534758?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "16",
    title: "Biking tours",
    endpoint: "biking-tours-16",
    mainImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "17",
    title: "Biking tours",
    endpoint: "biking-tours-17",
    mainImageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "18",
    title: "Biking tours",
    endpoint: "biking-tours-18",
    mainImageUrl:
      "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: "19",
    title: "Biking tours",
    endpoint: "biking-tours-19",
    mainImageUrl:
      "https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=1486&auto=format&fit=crop",
  },
  {
    id: "20",
    title: "Biking tours",
    endpoint: "biking-tours-20",
    mainImageUrl:
      "https://images.unsplash.com/photo-1711367798865-ba7d9b534758?q=80&w=1170&auto=format&fit=crop",
  },
];

export const PARTNER_LOGOS = [
  { id: '1', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '2', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
  { id: '3', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '4', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
  { id: '5', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '6', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
  { id: '7', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '8', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
  { id: '9', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '10', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
  { id: '11', url: '/mock-partner-logo/logo-vietjet-20.png' },
  { id: '12', url: '/mock-partner-logo/slogan-cua-vietnam-airlines.jpg' },
];