import { Group } from "@mantine/core";
import classes from "./landing-header.module.scss";
import Link from "next/link";
import LandingDrawer from "@/components/sidebars/landing-drawer/landing-drawer";
import LocationSelector from "@/components/primitives/location-selector/location-selector";
import { Route } from "next";

export async function LandingHeader() {
  return (
    <>
      <Group
        justify="space-between"
        align="center"
        className={classes.landingHeader}
      >
        <Link href="/" className={classes.logoLink}>
          <h1 className={classes.logoTitle}>The Vietnam Travel</h1>
        </Link>

        <Group>
          <Link href={"/customized-tours" as Route} className={classes.menuText}>
            Customized Tours
          </Link>
          <LocationSelector />
          <LandingDrawer />
        </Group>
      </Group>
    </>
  );
}
