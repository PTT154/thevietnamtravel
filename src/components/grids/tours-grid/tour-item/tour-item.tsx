import ImageCard from "@/components/primitives/image-card/image-card";
import { ITourCategoryResponse } from "@/interfaces/tour-category-interface";
import { Route } from "next";

interface TourItemProps {
  item: Pick<
    ITourCategoryResponse,
    "id" | "title" | "mainImageUrl" | "endpoint"
  >;
}

export default function TourItem({ item }: TourItemProps) {
  return (
    <ImageCard
      title={item.title}
      imageUrl={item.mainImageUrl || "/images/image-placeholder.png"}
      href={`/tours/${item.endpoint}` as Route}
      variant="normal"
      aspectRatio="1 / 1"
    />
  );
}
