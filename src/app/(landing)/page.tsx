import classes from "./page.module.scss";
import { Container } from "@mantine/core";

import { LandingCarousel } from "@/components/primitives/landing-carousel/landing-carousel";
import ToursGrid from "@/components/grids/tours-grid/tours-grid";
import Ads from "@/components/ads/Ads";
import { SectionHeader } from "@/components/primitives/section-header/section-header";
import AgenciesSection from "@/components/primitives/agencies-section/agencies-section";
import ChannelInfoSection from "@/components/channel-info/channel-info";
import PopularDestinationsSection from "@/components/primitives/popular-destinations/popular-destinations";

import { MOCK_SLIDES, MOCK_TOUR_CATEGORIES } from "@/mocks/landing-mock-data";

export default async function LandingPage() {
  return (
    <>
      <Container size="xl" classNames={{ root: classes.landingContainer }}>
        <LandingCarousel slides={MOCK_SLIDES} />

        <ToursGrid
          title="Vietnam Travel Types"
          subtitle="Welcome to website, where we showcase a wide variety of tours offered by carefully selected and trusted travel agents."
          toursData={MOCK_TOUR_CATEGORIES}
        />

        <Ads imageUrl="/mock-images/mock-ads.jpg" alt="Ads" />
      </Container>

      <Container
        size="xl"
        classNames={{ root: classes.landingContainer }}
        pt={"3rem"}
      >
        <SectionHeader
          title="The best Vietnam Agencies"
          subtitle="These are well thought of travel companies that we have verified"
          href="/agencies"
        />
      </Container>
      <AgenciesSection />

      <Container
        size="xl"
        py={"3rem"}
        classNames={{ root: classes.landingContainer }}
      >
        <SectionHeader
          title="Vietnam Travel Channel"
          subtitle="The travel services offered on this website include a wide range of interconnected and linked options."
          href="/channel"
        />
        <ChannelInfoSection imageWidth={6} imageHeight={8} />
      </Container>
      <PopularDestinationsSection />
    </>
  );
}
