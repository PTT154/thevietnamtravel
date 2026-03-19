import classes from "./layout.module.scss";
import { LandingHeader } from "@/components/headers/landing-header/landing-header";
import { Container } from "@mantine/core";
import LandingFooter from "@/components/footers/landing-footer/landing-footer";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={classes.landingLayout}>
        <Container size="xl" classNames={{ root: classes.landingContainer }}>
          <LandingHeader />
        </Container>
        {children}
        <LandingFooter />
      </div>
  );
}
