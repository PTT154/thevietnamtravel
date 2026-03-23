import classes from "./page.module.scss";
import { Container, Stack } from "@mantine/core";

import { LandingCarousel } from "@/components/primitives/landing-carousel/landing-carousel";
import { SectionHeader } from "@/components/primitives/section-header/section-header";
import AgenciesSection from "@/components/primitives/agencies-section/agencies-section";
import ChannelInfoSection from "@/components/channel-info/channel-info";
import PopularDestinationsSection from "@/components/primitives/popular-destinations/popular-destinations";

import { MOCK_SLIDES } from "@/mocks/landing-mock-data";
import { MOCK_TOUR_GRID_ITEMS } from "@/mocks/tour-grid-data";
import { SeeAllLink } from "@/components/primitives/see-all-link/see-all-link";
import ItemGrid from "@/components/grids/items-grid/item-grid";
import { MOCK_SUPPLIER_GRID_ITEMS } from "@/mocks/supplier-mock-data";
import SupplierGrid from "@/components/grids/supplier-grid/supplier-grid";

export default async function LandingPage() {
  return (
    <>
      <Container size="xl" classNames={{ root: classes.landingContainer }}>
        <LandingCarousel slides={MOCK_SLIDES} />

        <SupplierGrid
          title="Vietnam travel supplier information"
          subtitle="Providing information about local tourism services in Vietnam: Tours, restaurants, attractions... recommended directly by sales staff from the providers."
          data={MOCK_SUPPLIER_GRID_ITEMS}
        />

        <ItemGrid
          title="Vietnam Travel Types"
          subtitle="Welcome to website, where we showcase a wide variety of tours offered by carefully selected and trusted travel agents."
          data={MOCK_TOUR_GRID_ITEMS}
        />

        {/* <Ads imageUrl="/mock-images/mock-ads.jpg" alt="Ads" /> */}
      </Container>

      <Container
        size="xl"
        classNames={{ root: classes.landingContainer }}
        pt={"3rem"}
      >
        <SectionHeader
          title="The best Vietnam Agencies"
          subtitle="These are well thought of travel companies that we have verified"
          rightSection={<SeeAllLink href="/agencies" />}
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
          rightSection={<SeeAllLink href="/channel" />}
        />
        <ChannelInfoSection />
      </Container>
      <PopularDestinationsSection />
    </>
  );
}
