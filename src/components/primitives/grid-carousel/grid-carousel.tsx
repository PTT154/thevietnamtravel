"use client";

import { useRef, useCallback } from "react";
import type { MantineSpacing } from "@mantine/core";
import { Text, Stack } from "@mantine/core";
import { EmblaCarouselType } from "embla-carousel";
import classes from "./grid-carousel.module.scss"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Carousel } from "@mantine/carousel";

interface GridCarouselProps<TourCategoryItem extends { id: string }> {
  title?: string;
  subtitle?: string;
  data: TourCategoryItem[];
  renderItem: (item: TourCategoryItem) => React.ReactNode;
  rows?: number;
  rowGap?: MantineSpacing;
  slideGap?: MantineSpacing;
  slideSize?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export default function GridCarousel<TourCategoryItem extends { id: string }>({
  title,
  subtitle,
  data,
  renderItem,
  rows = 2,
  rowGap = "lg",
  slideGap = "lg",
  slideSize = { base: "50%", sm: "33.333%", md: "25%", lg: "20%" },
}: GridCarouselProps<TourCategoryItem> ) {
  const emblaRef = useRef<EmblaCarouselType | null>(null);

  const handleRight = useCallback(() => emblaRef.current?.scrollPrev(), []);
  const handleLeft = useCallback(() => emblaRef.current?.scrollNext(), []);

  const columns: TourCategoryItem[][] = [];
  for (let i = 0; i < data.length; i += rows) {
    columns.push(data.slice(i, i + rows));
  }

  return (
    <div className={classes.section}>
      <div className={classes.sectionHeader}>
        <div className={classes.headerLeft}>
          <h1 className={classes.pageTitle}>{title}</h1>
        </div>
        <div className={classes.navButtons}>
          <button
            className={classes.navBtn}
            aria-label="Previous"
            onClick={handleLeft}
          >
            <MdChevronLeft size={20} />
          </button>
          <button
            className={classes.navBtn}
            aria-label="Next"
            onClick={handleRight}
          >
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>
      {subtitle && (
        <Text lh={1.5} fz="lg" className={classes.pageSubtitle}>
          {subtitle}
        </Text>
      )}
      <Carousel
        getEmblaApi={(embla) => {
          emblaRef.current = embla;
        }}
        withControls={false}
        withIndicators={false}
        slideSize={slideSize}
        slideGap={slideGap}
        classNames={{ viewport: classes.carouselViewport }}
        emblaOptions={{ loop: true, align: "start" }}
      >
        {columns.map((col, colIndex) => (
          <Carousel.Slide key={colIndex}>
            <Stack gap={rowGap}>{col.map((item) => renderItem(item))}</Stack>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
