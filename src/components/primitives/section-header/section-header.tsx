import { Group, Stack, Title, Text } from "@mantine/core";
import { SeeAllLink } from "@/components/primitives/see-all-link/see-all-link";
import classes from "./section-header.module.scss";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
}

export function SectionHeader({ title, subtitle, href }: SectionHeaderProps) {
  return (
    <Stack gap={4} mb="1.5rem" className={classes.headerContainer}>
      {/* Title and Link */}
      <Group justify="space-between" align="center">
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        
        {href && (
          <div className={classes.seeAll}>
            <SeeAllLink href={href} />
          </div>
        )}
      </Group>

      {/* Subtitle */}
      {subtitle && (
        <Text className={classes.subtitle}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}