"use client";

import GridCarousel from "@/components/primitives/grid-carousel/grid-carousel";
import { ITourCategoryResponse } from "@/interfaces/tour-category-interface";
import TourItem from "@/components/grids/tours-grid/tour-item/tour-item";

type TourCategoryItem = Pick<
  ITourCategoryResponse,
  "id" | "title" | "mainImageUrl" | "endpoint"
>;

interface ToursGridProps {
  title?: string;
  subtitle?: string;
  toursData: TourCategoryItem[];
}

export default function ToursGrid({
  title,
  subtitle,
  toursData,
}: ToursGridProps) {
  return (
    <div style={{ padding: "2rem 0"}}>
      <GridCarousel
      title={title}
      subtitle={subtitle}
      data={toursData}
      rows={2}
      renderItem={(item) => <TourItem key={item.id} item={item} />}
    />
    </div>
  );
}
